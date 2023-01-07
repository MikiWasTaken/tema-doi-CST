import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit, OnChanges 
{
  @Input() game : any; 
  @Output() clickForMore = new EventEmitter <any>();
  ngOnInit(): void 
  {

  }

  ngOnChanges(): void {
    console.log(this.game)
  }

  goToFirstPage() : void
  {
      this.clickForMore.emit()
  }
}
