import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component ({
    selector: "io-game-child",
    template: `<div *ngFor="let obj of getGameData" class="row">
          <div class="col-md-4">
            <img alt="{{obj.phrase}}" src="{{obj.image}}" >
          </div>
    </div>`,
    styles: [`.jumbotron{ padding:10px;} .jumbotron p {padding:20px}`]
})

export class IOgameChild {

@Input() getGameData;
@Output() tripleClick:EventEmitter<string> = new EventEmitter<string>();
public gameData = this.getGameData;
  public counter = 0;

public setTripleClick(e){
  this.counter++;
  if(this.counter > 2 ) {
   this.tripleClick.emit(e);
   this.counter = 0; 
  }
   
}
 
}   