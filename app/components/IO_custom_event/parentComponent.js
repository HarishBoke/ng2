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
var IOParentElement = (function () {
    function IOParentElement() {
    }
    IOParentElement.prototype.getChildData = function (childMessage) {
        this.childData = childMessage;
        alert("message/ OUtput form child on tripleClick " + this.childData);
    };
    IOParentElement = __decorate([
        core_1.Component({
            selector: "io-parent-element",
            template: " <h3>This is parent  element </h3> <div class=\"jumbotron\">\n    <p>Printed Data from parent element  </p></div>\n     <io-child-element (tripleClick)=\"getChildData($event)\"></io-child-element>",
            styles: [".jumbotron{ padding:10px;} .jumbotron p {padding:20px}"]
        }), 
        __metadata('design:paramtypes', [])
    ], IOParentElement);
    return IOParentElement;
}());
exports.IOParentElement = IOParentElement;
//# sourceMappingURL=parentComponent.js.map