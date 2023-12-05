import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss']
})
export class CardProjectComponent {
  @Input() techTitle: any;
  @Input() titleProject: any;
  @Input() listTech: any;
  @Input() imagem: any;
  @Input() link: any;
}
