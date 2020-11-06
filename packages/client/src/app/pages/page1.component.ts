import { Component } from '@angular/core';

@Component({
    selector: 'app-page1',
    template: `
    <h1>{{title}}</h1>
    <a routerLink="/page2">to page2</a>
    `
})
export class Page1Component {
    title = 'page1';
}
