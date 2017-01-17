import { Component } from '@angular/core';


// inline binding example:
// accessing value in angular2 is #parentValue is my id and accessing value through (parent.value) in this case we are passing this value to child element
/*@Component ({
    selector: "parent-element",
    template: ` <h3>This is parent  element </h3> <div class="jumbotron">
    <label>Parent:</label><input type="text" #parentValue (keyup)="0" >     
     <p>Printed Data from parent element and visible in child element <b>{{getParentData}}</b> </p></div>
     <child-element [getParentData]="parentValue.value"></child-element>`,
    styles: [`.jumbotron{ padding:10px;} .jumbotron p {padding:20px}`]
}) */


//funtion binding exmaple:
// call function on event and passs the id value in the argument and set later in parameter
@Component ({
    selector: "parent-element",
    template: ` <h3>This is parent  element </h3> <div class="jumbotron">
    <label>Parent:</label><input type="text" #parentValue (keyup)="updateChildValue(parentValue.value)" >     
     <p>Printed Data from parent element and visible in child element <b>{{getParentData}}</b> </p></div>
     <child-element [getParentData]="setChildValue"></child-element>`,
    styles: [`.jumbotron{ padding:10px;} .jumbotron p {padding:20px}`]
})

// question why we have added 0 in the keyup? Harish to resolve! 
export class ParentElement {
    public setChildValue:string[];
    //public getChildData:string[];

    updateChildValue(e){
        this.setChildValue = e;
    }
}