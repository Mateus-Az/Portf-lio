import { Component, HostListener, OnInit } from '@angular/core';
import { Howl } from 'howler';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sound: Howl | undefined;


  constructor() { }

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

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {

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