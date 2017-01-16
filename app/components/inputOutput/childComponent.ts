import { Component, Input, Output } from '@angular/core';

@Component ({
    selector: "child-element",
    template: ` <h3>This is from  parent  element {{getParentData}} </h3> <div class="jumbotron"><label>Child:</label><input type="text"></div>`
})

export class ChildElement {

  @Input() getParentData;

  onNgChanges(){

  }
  ///@Output()  
}