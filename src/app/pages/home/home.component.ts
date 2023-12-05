import { Component, HostListener, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Howl } from 'howler';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sound: Howl | undefined;

  @ViewChild('viewOne') viewOne!: ElementRef;
  @ViewChild('viewTwo') viewTwo!: ElementRef;

  cardsProject = [
    {
      techTitle: 'Full-Stack',
      titleProject: 'Missão Andrômeda',
      imagem: '/assets/and.png',
      link:'https://github.com/Mateus-Az/Missao-Andromeda',
      listStack: [
        { stack: 'java' },
        { stack: 'spring' },
        { stack: 'angular' },
        { stack: 'aws' },
        { stack: 'microservices' }
      ]
    },
    {
      techTitle: 'Front-end',
      titleProject: 'Halloween',
      imagem: '/assets/Group6.png',
      link:'https://github.com/Mateus-Az/hallowen-page',
      listStack: [
        { stack: 'angular' },
        { stack: 'typescript' },
        { stack: 'scss' },
        { stack: 'html' },

      ]
    },
    {
      techTitle: 'Back-end',
      titleProject: 'RailVista',
      imagem: '/assets/rail.png',
      link:'https://github.com/Mateus-Az/project-Rail-Vista',
      listStack: [
        { stack: 'java' },
        { stack: 'spring' },
        { stack: 'microservices' },
        { stack: 'webflux' },
        { stack: 'postgres' }

      ]
    },
    {
      techTitle: 'Desktop',
      titleProject: 'Viação Suli',
      imagem: '/assets/desk.png',
      link:'https://github.com/Mateus-Az/Sistema-Empresa-de-Transporte',
      listStack: [
        { stack: 'java' },
        { stack: 'poo' },
        { stack: 'mvc' },
        { stack: 'swing' },
        { stack: 'netbeans' }
      ]
    }
  ];

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.sound = new Howl({
      src: ['assets/audio.mp3'],
      loop: true
    });

    this.sound.play();
  }

  ngOnDestroy() {
    if (this.sound) {
      this.sound.stop();
    }
  }

  checkVisibility() {
    const col1 = this.viewOne.nativeElement.querySelector('.col-1');
    const col2 = this.viewOne.nativeElement.querySelector('.col-2');
    const col3 = this.viewOne.nativeElement.querySelector('.col-3');

    const projectHead = this.viewTwo.nativeElement.querySelector('.project-header');
    const projectCards = this.viewTwo.nativeElement.querySelectorAll('card-project');

    if (this.isElementTopInViewport(col1) && col1 && !col1.classList.contains('zoomIn')) {
      this.renderer.addClass(col1, 'zoomIn');
    }

    if (this.isElementTopInViewport(col2) && col2 && !col2.classList.contains('zoomIn')) {
      this.renderer.addClass(col2, 'zoomIn');
    }

    if (this.isElementTopInViewport(col3) && col3 && !col3.classList.contains('zoomIn')) {
      this.renderer.addClass(col3, 'zoomIn');
    }

    if (this.isElementTopInViewport(projectHead) && projectHead && !projectHead.classList.contains('fadeIn')) {
      this.renderer.addClass(projectHead, 'fadeIn');
    }
    projectCards.forEach((card: any) => {
      if (this.isElementTopInViewport(card) && card && !card.classList.contains('fadeIn')) {
        this.renderer.addClass(card, 'fadeIn');
      }
    });

  }


  isElementTopInViewport(el: any) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight);
  }



  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {

    this.checkVisibility();

    const scrollPosition = window.scrollY || window.pageYOffset;

    const margin = (scrollPosition / 100) * 130;
    const margin1 = (scrollPosition / 100) * 90;
    const margin2 = (scrollPosition / 100) * 110;
    const margin3 = (scrollPosition / 100) * 280;

    const element = document.getElementById('r1');
    const element1 = document.getElementById('r2');
    const element2 = document.getElementById('r3');
    const element3 = document.getElementById('view2-r1')!;

    if (element && element1 && element2) {
      element.style.marginRight = `${margin}px`;
      element1.style.marginLeft = `${margin1}px`;
      element2.style.marginRight = `${margin2}px`;
      element3.style.marginRight = `${margin3}px`;
    }
  }
}