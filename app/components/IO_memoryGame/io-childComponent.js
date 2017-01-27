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
        //@Output() tripleClick:EventEmitter<string> = new EventEmitter<string>();
        this.gameData = this.getGameData;
        this.randomNumbers = [];
        this.shuffleArray = [];
        this.allImg = document.querySelectorAll(".gameImg");
        this.matchArr = [];
    }
    IOgameChild.prototype.ngOnInit = function () {
        this.cloneDataArray = this.getGameData.concat(this.getGameData);
        console.log(this.cloneDataArray.length);
        //return this.cloneDataArray;
    };
    IOgameChild.prototype.matchPair = function (e) {
        var allImg = document.querySelectorAll(".gameImg");
        console.log(e.target);
        if (e.target.style && e.target.style.opacity == "0") {
            e.target.style.opacity = "100";
            e.target.style.pointerEvents = "none";
            e.target.style.cursor = "default";
            this.matchArr.push(e.target.src);
            console.log(this.matchArr);
            if (this.matchArr.length > 2) {
                if (this.matchArr[0] == this.matchArr[1]) {
                    alert("matchArr len: " + this.matchArr.length);
                }
                else {
                    for (var i = 0; i < allImg.length; ++i) {
                        allImg[i].style.opacity = "0";
                    }
                }
                this.matchArr.splice(0, 1);
            }
        }
        else {
            e.target.style.opacity = "0";
            e.target.style.pointerEvents = "all";
            e.target.style.cursor = "pointer";
        }
    };
    IOgameChild.prototype.shuffle = function () {
        var tmp, current, top = this.cloneDataArray.length;
        if (top)
            while (--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = this.cloneDataArray[current];
                this.cloneDataArray[current] = this.cloneDataArray[top];
                this.cloneDataArray[top] = tmp;
            }
        this.shuffleArray = this.cloneDataArray;
        return this.shuffleArray;
    };
    IOgameChild.prototype.init = function () {
        //this.cloneData();
        this.shuffle();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], IOgameChild.prototype, "getGameData", void 0);
    IOgameChild = __decorate([
        core_1.Component({
            selector: "io-game-child",
            template: "<h3>Child Component</h3>\n        <div class=\"container-fluid\">\n        <button (click)=\"init()\">button</button>\n        <div id=\"gameWrapper\" class=\"row\" >\n          <div class=\"column col-md-3\" *ngFor=\"let obj of shuffleArray\"  (click)=\"matchPair($event)\">\n            <img alt=\"{{obj.phrase}}\" class=\"gameImg\" src=\"{{obj.image}}\" style=\"opacity:0;\">\n          </div>\n      </div>\n      </div>",
            styles: ["#gameWrapper {width:inherit;} #gameWrapper .column{ cursor:pointer;background:#ccc;  height:205px; width:32%; border-radius: 10px; border: 1px solid #fff;} #gameWrapper .column img{width:100%; height:100%; border-radius:0; opacity:0;}"]
        }), 
        __metadata('design:paramtypes', [])
    ], IOgameChild);
    return IOgameChild;
}());
exports.IOgameChild = IOgameChild;
//# sourceMappingURL=io-childComponent.js.map