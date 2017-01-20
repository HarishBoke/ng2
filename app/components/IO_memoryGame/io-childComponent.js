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
var IOgameChild = (function () {
    function IOgameChild() {
        this.tripleClick = new core_1.EventEmitter();
        this.gameData = this.getGameData;
        this.counter = 0;
    }
    IOgameChild.prototype.setTripleClick = function (e) {
        this.counter++;
        if (this.counter > 2) {
            this.tripleClick.emit(e);
            this.counter = 0;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], IOgameChild.prototype, "getGameData", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], IOgameChild.prototype, "tripleClick", void 0);
    IOgameChild = __decorate([
        core_1.Component({
            selector: "io-game-child",
            template: "<div *ngFor=\"let obj of getGameData\" class=\"row\">\n          <div class=\"col-md-4\">\n            <img alt=\"{{obj.phrase}}\" src=\"{{obj.image}}\" >\n          </div>\n    </div>",
            styles: [".jumbotron{ padding:10px;} .jumbotron p {padding:20px}"]
        }), 
        __metadata('design:paramtypes', [])
    ], IOgameChild);
    return IOgameChild;
}());
exports.IOgameChild = IOgameChild;
//# sourceMappingURL=io-childComponent.js.map