import { Component, Input, Output } from '@angular/core';

@Component ({
    selector: "child-element",
    template: ` <h3>This is  child  element </h3> <div class="jumbotron"><label>Child:</label>
           <input type="text" #ChildElement (keyup)="updateValueToParent(ChildElement.value)">
         <p>Printed Data from child element and visible in parent element <b>{{getParentData}}</b> </p>
    </div>`,
    styles: [`.jumbotron{ padding:10px;} .jumbotron p {padding:20px}`]
})

export class ChildElement {

  @Input() getParentData:string[];
  @Output() sendChildData:string[];

  public childValue:string[];
    updateValueToParent(e){
       // this.sendChildData.emit(e);
  }
  ///@Output()  
}   