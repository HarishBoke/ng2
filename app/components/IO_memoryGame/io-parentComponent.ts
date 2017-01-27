import { Component } from '@angular/core';
import {GameService} from "./../../services/ioGameService";

@Component ({
    selector: "io-game-parent",
    template: `<h3>Parent Component </h3> <div class="jumbotron">
    <h4>Movies list to match</h4>
    <ul><li *ngFor="let obj of setGameData">{{obj.phrase}}</li></ul>
     <io-game-child [getGameData]="setGameData"></io-game-child>`,
    styles: [`.jumbotron{ padding:10px;} .jumbotron p {padding:20px} `]
})


export class IOgameParent {
    public setGameData:Array<any>; 
    constructor(private gameData: GameService) {
        this.setGameData = gameData.saveGameData;
    }


}