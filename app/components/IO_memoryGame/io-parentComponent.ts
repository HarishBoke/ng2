import { Component } from '@angular/core';
import {IOgameService} from "./../../services/ioGameService";

@Component ({
    selector: "io-game-parent",
    template: ` <h3>This is parent  element </h3> <div class="jumbotron">
    <ul><li *ngFor="let obj of setGameData">{{obj.phrase}}</li></ul>
    <p>Printed Data from parent element  </p></div>
     <io-game-child [getGameData]="setGameData"></io-game-child>`,
    styles: [`.jumbotron{ padding:10px;} .jumbotron p {padding:20px}`]
})


export class IOgameParent {
    public setGameData:Array<any>; 
    constructor(private gameData: IOgameService) {
        this.setGameData = gameData.saveGameData;
            console.log(this.setGameData);
    }

}