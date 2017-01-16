import { Component } from '@angular/core';

@Component ({
    selector: "parent-element",
    template: ` <h3>This is from  child element </h3> <div class="jumbotron">
    <label>Parent:</label><input type="text" (onChange)="updateChildValue(element)" ></div> <child-element [getParentData]="setChildValue"></child-element>`
})

export class ParentElement {
    //public getParentData:string[];
    public setChildValue:string[];
    public getChildData:string[];
    updateChildValue(element){
        this.setChildValue = element.value;
    }
}