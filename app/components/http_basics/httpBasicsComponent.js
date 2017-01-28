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
var core_1 = require("@angular/core");
var HttpBasicsService_1 = require("./../../services/HttpBasicsService");
var HttpBasicComponent = (function () {
    function HttpBasicComponent(_httpBasicSvc) {
        this._httpBasicSvc = _httpBasicSvc;
        this.incomeData = [];
        this.incomeDataTable = false;
    }
    HttpBasicComponent.prototype.getIncomeData = function () {
        var _this = this;
        this.incomeDataTable = true;
        this._httpBasicSvc.setIncomeData().subscribe(function (response) {
            _this.incomeData = response;
            console.log(response);
        });
    };
    HttpBasicComponent = __decorate([
        core_1.Component({
            selector: 'http-basic-get',
            template: "<h2>Click button to get Data</h2> <button (click)=\"getIncomeData()\">Get Income Data</button> \n        <ul class=\"list-group\"><li  class=\"list-group-item\" *ngFor=\"let objc of incomeData\">{{objc.receiptName}}</li></ul>"
        }), 
        __metadata('design:paramtypes', [HttpBasicsService_1.HttpBasicsService])
    ], HttpBasicComponent);
    return HttpBasicComponent;
}());
exports.HttpBasicComponent = HttpBasicComponent;
//# sourceMappingURL=httpBasicsComponent.js.map