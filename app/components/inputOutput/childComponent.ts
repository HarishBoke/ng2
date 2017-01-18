import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component ({
    selector: "child-element",
    template: ` <h3>This is  child  element </h3> <div class="jumbotron"><label>Child:</label>
           <input type="text" #childValue (keyup)="updateParentValue(childValue.value)">
         <p>Printed Data from parent element <b>{{getParentData}}</b> </p>
    </div>`,
    styles: [`.jumbotron{ padding:10px;} .jumbotron p {padding:20px}`]
})

export class ChildElement {

  @Input() getParentData:string[];

// Output method
//sendChildData will access as method in parent Component, emit kind of broadcast value to parent and we access it by $event
  @Output() sendChildData:EventEmitter<string> = new EventEmitter<string>();
  public updateParentValue(e):void{
      this.sendChildData.emit(e)
  }
}   