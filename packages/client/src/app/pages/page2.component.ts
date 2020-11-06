import { Component } from '@angular/core';

@Component({
    selector: 'app-page2',
    template: `
    <h1>{{title}}</h1>
    <a routerLink="/page1">to page1</a>
    `
})
export class Page2Component {
    title = 'page2';
}
