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
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var appComponent_1 = require('./appComponent');
var loginComponent_1 = require('./components/login/loginComponent');
var welcomeComponent_1 = require('./components/welcome/welcomeComponent');
var userProfileComponent_1 = require('./components/profile/userProfileComponent');
var headerComponent_1 = require('./components/header/headerComponent');
var sidebarComponent_1 = require('./components/sidebar/sidebarComponent');
var dashboardComponent_1 = require('./components/dashboard/dashboardComponent');
// for inputOutput prototype
var inputOutputComponent_1 = require('./components/inputOutput/inputOutputComponent');
var parentComponent_1 = require('./components/inputOutput/parentComponent');
var childComponent_1 = require('./components/inputOutput/childComponent');
// for inputOutput custom event
var io_custom_event_1 = require('./components/IO_custom_event/io_custom_event');
var parentComponent_2 = require('./components/IO_custom_event/parentComponent');
var childComponent_2 = require('./components/IO_custom_event/childComponent');
//import {AreaChartComponent} from './components/shared/charts/area-chart/AreaChartComponent';
//lib or thirdParty
//import { CHART_DIRECTIVES } from 'ng2-charts/ng2-charts';
//import { ChartsModule } from 'ng2-charts/ng2-charts';
// import {IncomeService} from "./services/incomeService";
// import {UserService} from "./services/user.service";
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                //ChartsModule,
                router_1.RouterModule.forRoot([
                    { 'path': '', redirectTo: 'login', pathMatch: 'full' },
                    { 'path': 'login', component: loginComponent_1.Login },
                    { 'path': 'welcome', component: welcomeComponent_1.Welcome },
                    { 'path': 'dashboard', component: dashboardComponent_1.DashboardComponent },
                    { 'path': 'inputOutput', component: inputOutputComponent_1.InputOutput },
                    { 'path': 'io-customEvent', component: io_custom_event_1.IOcustomEvent }
                ])
            ],
            declarations: [appComponent_1.AppComponent, loginComponent_1.Login, welcomeComponent_1.Welcome, userProfileComponent_1.UserProfile, headerComponent_1.HeaderComponent, sidebarComponent_1.SidebarComponent, dashboardComponent_1.DashboardComponent,
                inputOutputComponent_1.InputOutput, parentComponent_1.ParentElement, childComponent_1.ChildElement, io_custom_event_1.IOcustomEvent, parentComponent_2.IOParentElement, childComponent_2.IOChildElement],
            bootstrap: [appComponent_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map