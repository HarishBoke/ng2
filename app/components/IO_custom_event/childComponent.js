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
var IOChildElement = (function () {
    function IOChildElement() {
        //  @Input() getParentData:string[];
        this.tripleClick = new core_1.EventEmitter();
        this.counter = 0;
    }
    IOChildElement.prototype.setTripleClick = function (e) {
        this.counter++;
        if (this.counter > 2) {
            this.tripleClick.emit(e);
            this.counter = 0;
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], IOChildElement.prototype, "tripleClick", void 0);
    IOChildElement = __decorate([
        core_1.Component({
            selector: "io-child-element",
            template: " <h3>This is  child  element </h3> <div class=\"jumbotron\"><label>Child:</label>\n    <button class=\"btn btn-primary\" (click)=\"setTripleClick('Harish')\">click here thrice!</button>\n    </div>",
            styles: [".jumbotron{ padding:10px;} .jumbotron p {padding:20px}"]
        }), 
        __metadata('design:paramtypes', [])
    ], IOChildElement);
    return IOChildElement;
}());
exports.IOChildElement = IOChildElement;
//# sourceMappingURL=childComponent.js.map