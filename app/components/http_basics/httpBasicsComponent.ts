import {Component} from "@angular/core";
import {HttpBasicsService} from "./../../services/HttpBasicsService";

@Component({
    selector: 'http-basic-get',
    template: `<h2>Click button to get Data</h2> <button (click)="getIncomeData()">Get Income Data</button> 
        <ul class="list-group"><li  class="list-group-item" *ngFor="let objc of incomeData">{{objc.receiptName}}</li></ul>`
})
export class HttpBasicComponent{
    public incomeData:any = [];
    public incomeDataTable = false;
    constructor(private _httpBasicSvc: HttpBasicsService){

    }
    public getIncomeData(){
        this.incomeDataTable = true;
        this._httpBasicSvc.setIncomeData().subscribe((response) => {
            this.incomeData = response;
            console.log(response);        
        });
    }
}