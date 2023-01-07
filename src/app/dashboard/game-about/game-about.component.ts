import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-about',
  templateUrl: './game-about.component.html',
  styleUrls: ['./game-about.component.scss']
})
export class GameAboutComponent {
  @Input() about: any;
}
