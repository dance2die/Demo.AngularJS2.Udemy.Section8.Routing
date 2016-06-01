import {Component, OnInit} from "angular2/core";
import {RouteParams, RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {Comp1MainComponent} from "./comp1-main.components";
import {Comp1SubComponent} from "./comp1-sub.components";

@Component({
    template: `
        This is Component 1
        <div>
            Source was {{source}}    
        </div>
        <div>
            Optional: {{optional}}    
        </div>
        <div><a [routerLink]="['Component1Main']">Main</a></div>
        <div><a [routerLink]="['Component1Sub']">Sub</a></div>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/', name: 'Component1Main', component: Comp1MainComponent, useAsDefault: true},
    {path: '/subroute', name: 'Component1Sub', component: Comp1SubComponent }
])
export class Component1Component implements OnInit{
    source: string;
    optional: string;

    // RouteParams allows getting arguments passed via routing.
    constructor(private _routeParams: RouteParams){}

    ngOnInit():any {
        this.source = this._routeParams.get('source');
        this.optional = this._routeParams.get('optional');
    }
}






