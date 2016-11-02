import { Component } from '@angular/core';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'navbar',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  // providers: [
  //   Title
  // ],
  // Our list of styles in our component. We may add more to compose many styles together
  // styleUrls: [ './home.component.css' ],
  // styles: [ require('./home.sass') ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './navbar.component.html'
})
export class Navbar {

  name = 'Im coming from the component navbar';
  // TypeScript public modifiers
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Navbar` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

}
