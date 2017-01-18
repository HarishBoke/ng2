import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component ({
    selector: "io-child-element",
    template: ` <h3>This is  child  element </h3> <div class="jumbotron"><label>Child:</label>
    <button class="btn btn-primary" (click)="setTripleClick('Harish')">click here thrice!</button>
    </div>`,
    styles: [`.jumbotron{ padding:10px;} .jumbotron p {padding:20px}`]
})

export class IOChildElement {

//  @Input() getParentData:string[];

  @Output() tripleClick:EventEmitter<string> = new EventEmitter<string>();
  public counter = 0;

public setTripleClick(e){
  this.counter++;
  if(this.counter > 2 ) {
   this.tripleClick.emit(e);
   this.counter = 0; 
  }
   
}
 
}   