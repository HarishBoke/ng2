import { Component } from '@angular/core';

@Component ({
    selector: "io-parent-element",
    template: ` <h3>This is parent  element </h3> <div class="jumbotron">
    <p>Printed Data from parent element  </p></div>
     <io-child-element (tripleClick)="getChildData($event)"></io-child-element>`,
    styles: [`.jumbotron{ padding:10px;} .jumbotron p {padding:20px}`]
})


export class IOParentElement {
    public childData;

   public getChildData(childMessage: string[]){
      this.childData = childMessage;
      alert("message/ OUtput form child on tripleClick " + this.childData);
   }
}