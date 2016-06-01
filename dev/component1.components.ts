import {Component, OnInit} from "angular2/core";
import {RouteParams} from "angular2/router";

@Component({
    template: `
        This is Component 1
        <div>
            Source was {{source}}    
        </div>
        <div>
            Optional: {{optional}}    
        </div>
    `
})
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






