import {Component} from "angular2/core";
import {Router} from "angular2/router";

@Component({
    template: `
        <h2>This is component2</h2>
        <button (click)="onNavigate()">Take me to Component1</button>
    `
})
export class Component2Component{
    constructor(private _router: Router){}

    onNavigate(){
        this._router.navigate(['Component1', {source: 'Component 2'}]);
    }
}






