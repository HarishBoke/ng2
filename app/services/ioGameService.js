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
var http_1 = require('@angular/http');
// Import RxJs required methods
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var GameService = (function () {
    function GameService(_http) {
        this._http = _http;
        this.saveGameData = [
            {
                "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT8oL0tVOPZvi9lCopFfuxDv4U0w80trjT9D1_zcMiRsPMbYPXi8w",
                "phrase": "Barfii"
            }, {
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMSR6-riNiZaqJB9W8l8ka1tCH87uEXF1mVgBqoUxSzDEGPTL2",
                "phrase": "Talaash"
            }, {
                "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT8C4ytjUo-5xeUS3olEg4LCz8N7ehLFW7kPIVX5ljg34dsdBdd",
                "phrase": "Agneepath"
            }, {
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQH6XO3G5uqhYysFcB6-BEmwVfWMNtVnxiJBiOxHg9nIRpxIZMiA",
                "phrase": "Rowdy Rathore"
            }
        ];
        var data = this._http.get("http://localhost:9999/income").map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log("prin", data);
        }, function (error) { return console.log('Could not load todos.'); });
    }
    GameService.prototype.getIncomeData = function () {
    };
    GameService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GameService);
    return GameService;
}());
exports.GameService = GameService;
//# sourceMappingURL=ioGameService.js.map