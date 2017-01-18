"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
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
var ParentElement = (function () {
    function ParentElement() {
    }
    //public getChildData:string[];
    ParentElement.prototype.updateChildValue = function (e) {
        this.setChildValue = e;
    };
    ParentElement.prototype.getDataFromChild = function (message) {
        this.childValue = message;
    };
    ParentElement = __decorate([
        core_1.Component({
            selector: "parent-element",
            template: " <h3>This is parent  element </h3> <div class=\"jumbotron\">\n    <label>Parent:</label><input type=\"text\" #parentValue (keyup)=\"updateChildValue(parentValue.value)\" >     \n     <p>Printed Data from  child element <b>{{childValue}}</b> </p></div>\n     <child-element [getParentData]=\"setChildValue\" (sendChildData)=\"getDataFromChild($event)\"></child-element>",
            styles: [".jumbotron{ padding:10px;} .jumbotron p {padding:20px}"]
        }), 
        __metadata('design:paramtypes', [])
    ], ParentElement);
    return ParentElement;
}());
exports.ParentElement = ParentElement;
//# sourceMappingURL=parentComponent.js.map