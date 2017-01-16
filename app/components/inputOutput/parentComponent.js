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
var ParentElement = (function () {
    function ParentElement() {
    }
    ParentElement.prototype.updateChildValue = function (element) {
        this.setChildValue = element.value;
    };
    ParentElement = __decorate([
        core_1.Component({
            selector: "parent-element",
            template: " <h3>This is from  child element </h3> <div class=\"jumbotron\">\n    <label>Parent:</label><input type=\"text\" (onChange)=\"updateChildValue(element)\" ></div> <child-element [getParentData]=\"setChildValue\"></child-element>"
        }), 
        __metadata('design:paramtypes', [])
    ], ParentElement);
    return ParentElement;
}());
exports.ParentElement = ParentElement;
//# sourceMappingURL=parentComponent.js.map