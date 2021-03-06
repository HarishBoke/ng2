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
var ChildElement = (function () {
    function ChildElement() {
        // Output method
        //sendChildData will access as method in parent Component, emit kind of broadcast value to parent and we access it by $event
        this.sendChildData = new core_1.EventEmitter();
    }
    ChildElement.prototype.updateParentValue = function (e) {
        this.sendChildData.emit(e);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ChildElement.prototype, "getParentData", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ChildElement.prototype, "sendChildData", void 0);
    ChildElement = __decorate([
        core_1.Component({
            selector: "child-element",
            template: " <h3>This is  child  element </h3> <div class=\"jumbotron\"><label>Child:</label>\n           <input type=\"text\" #childValue (keyup)=\"updateParentValue(childValue.value)\">\n         <p>Printed Data from parent element <b>{{getParentData}}</b> </p>\n    </div>",
            styles: [".jumbotron{ padding:10px;} .jumbotron p {padding:20px}"]
        }), 
        __metadata('design:paramtypes', [])
    ], ChildElement);
    return ChildElement;
}());
exports.ChildElement = ChildElement;
//# sourceMappingURL=childComponent.js.map