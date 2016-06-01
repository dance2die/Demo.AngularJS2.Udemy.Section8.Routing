import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {Component1Component} from "./component1.components";
import {Component2Component} from "./component2.components";

@Component({
    selector: 'my-app',
    template: `
        <header>
            <ul>
                <li><a [routerLink]="['Component1']">Component1</a></li>
                <li><a [routerLink]="['Component2']">Component2</a></li>
            </ul>
        </header>
        <router-outlet></router-outlet>

    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/component-1', name: 'Component1', component: Component1Component, useAsDefault: true},
    {path: '/component-2', name: 'Component2', component: Component2Component}
])
export class AppComponent {

}
