import { NgModule }      from '@angular/core';
import { RouterModule }   from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }      from '@angular/http';



import { AppComponent } from './appComponent';
import {Login} from './components/login/loginComponent';
import {Welcome} from './components/welcome/welcomeComponent';
import {UserProfile} from './components/profile/userProfileComponent';
import {HeaderComponent} from './components/header/headerComponent';
import {SidebarComponent} from './components/sidebar/sidebarComponent';
import {DashboardComponent} from './components/dashboard/dashboardComponent';

// for inputOutput prototype
import {InputOutput} from './components/inputOutput/inputOutputComponent';
import {ParentElement} from './components/inputOutput/parentComponent';
import {ChildElement} from './components/inputOutput/childComponent';


// for inputOutput custom event
import {IOcustomEvent} from './components/IO_custom_event/io_custom_event';
import {IOParentElement} from './components/IO_custom_event/parentComponent';
import {IOChildElement} from './components/IO_custom_event/childComponent';

// for inputOutput memory game
import {IOgame} from './components/IO_memoryGame/io-game';
import {IOgameParent} from './components/IO_memoryGame/io-parentComponent';
import {IOgameChild} from './components/IO_memoryGame/io-childComponent';

//import {AreaChartComponent} from './components/shared/charts/area-chart/AreaChartComponent';
import {HttpBasicComponent} from './components/http_basics/httpBasicsComponent';
import {HttpBasicMasterComponent} from './components/http_basics/httpBasicMasterComponent';

// services
import {GameService} from "./services/ioGameService";
import {HttpBasicsService} from "./services/HttpBasicsService"

//lib or thirdParty
//import { CHART_DIRECTIVES } from 'ng2-charts/ng2-charts';
//import { ChartsModule } from 'ng2-charts/ng2-charts';

// import {IncomeService} from "./services/incomeService";
// import {UserService} from "./services/user.service";

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    //ChartsModule,
    RouterModule.forRoot([
      {'path':'', redirectTo:'login', pathMatch:'full'},
      {'path':'login', component:Login},
      {'path':'welcome', component:Welcome},
      {'path':'dashboard',component:DashboardComponent},
      {'path': 'inputOutput', component:InputOutput},
      {'path':'io-customEvent', component:IOcustomEvent},
      {'path':'io-game', component:IOgame},
      {'path': 'http-basics', component:HttpBasicMasterComponent }
    ])
 ],
  declarations: [ AppComponent, Login, Welcome, UserProfile, HeaderComponent, SidebarComponent, DashboardComponent,
  InputOutput, ParentElement, ChildElement, IOcustomEvent, IOParentElement, IOChildElement, IOgame, IOgameParent, IOgameChild, HttpBasicComponent, HttpBasicMasterComponent],
  bootstrap:    [ AppComponent ],
  providers: [ GameService, HttpBasicsService ]
})
export class AppModule { }
