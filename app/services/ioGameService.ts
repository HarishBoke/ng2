import { Injectable } from "@angular/core";
import { Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()

export class GameService {
    
    constructor(private _http: Http){
      var data =  this._http.get("http://localhost:9999/income").map((res:Response) => res.json() ).subscribe(data => {
          console.log("prin", data);
    }, error => console.log('Could not load todos.'));
        
    }
    public getIncomeData():any{
    
    }

    public saveGameData = [
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
    ]
}