import { Component, Input, Output, EventEmitter ,OnInit} from '@angular/core';

@Component ({
    selector: "io-game-child",
    template: `<h3>Child Component</h3>
        <div class="container-fluid">
        <button (click)="init()">button</button>
        <div id="gameWrapper" class="row" >
          <div class="column col-md-3" *ngFor="let obj of shuffleArray"  (click)="matchPair($event)">
            <img alt="{{obj.phrase}}" class="gameImg" src="{{obj.image}}" style="opacity:0;">
          </div>
      </div>
      </div>`,
    styles: [`#gameWrapper {width:inherit;} #gameWrapper .column{ cursor:pointer;background:#ccc;  height:205px; width:32%; border-radius: 10px; border: 1px solid #fff;} #gameWrapper .column img{width:100%; height:100%; border-radius:0; opacity:0;}`]
})

export class IOgameChild implements OnInit  {
 
@Input() getGameData;
//@Output() tripleClick:EventEmitter<string> = new EventEmitter<string>();
public gameData = this.getGameData;
public cloneDataArray:Array<any>;
public randomNumbers:Array<number> = [];
public shuffleArray:Array<any> = [];
public allImg = document.querySelectorAll(".gameImg");
public matchArr:Array<any> = [];

ngOnInit(){
    this.cloneDataArray = this.getGameData.concat(this.getGameData);
    console.log(this.cloneDataArray.length);
    //return this.cloneDataArray;
}
public matchPair(e){
  var allImg:any = document.querySelectorAll(".gameImg");
  console.log(e.target);
  if(e.target.style && e.target.style.opacity == "0") {
      e.target.style.opacity = "100";
      e.target.style.pointerEvents = "none";
      e.target.style.cursor = "default";
      this.matchArr.push(e.target.src);
      console.log(this.matchArr);
      if(this.matchArr.length > 2){
            if(this.matchArr[0] == this.matchArr[1]){
              alert("matchArr len: " + this.matchArr.length);
            //    this.cloneDataArray.map((obj, index) => {
                 
            //  })
              
            }
            else {
                for(var i = 0; i < allImg.length;++i){
                    allImg[i].style.opacity = "0";
                }
            }
                this.matchArr.splice(0,1);
        } 
 }
  else{
    e.target.style.opacity = "0";
    e.target.style.pointerEvents = "all";
    e.target.style.cursor = "pointer";
  }
}
public shuffle() {
    var tmp, current, top = this.cloneDataArray.length;
    if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = this.cloneDataArray[current];
        this.cloneDataArray[current] = this.cloneDataArray[top];
        this.cloneDataArray[top] = tmp;
    }
    this.shuffleArray = this.cloneDataArray;
    return this.shuffleArray;
}
public init(){
  //this.cloneData();
  this.shuffle();
}

}   