/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import {
  MenuModule,
  MenuItem,
} from 'primeng/primeng';

import { AppState } from './app.service';
import { RouterModule, RouterStateSnapshot, Router } from '@angular/router';
/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css',
    '../../node_modules/primeng/resources/primeng.min.css',
    '../../node_modules/primeng/resources/themes/omega/theme.css'
  ],
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';

  public menuItems: MenuItem[];

  constructor(
    public appState: AppState,
    public router: Router
  ) {}

  public ngOnInit() {

    this.menuItems = [
      {
        label: 'Home',
        icon: 'fa-home',
        routerLink: ['/home'],
      },
      {
        label: 'Dice Tool',
        icon: 'fa-list',
        routerLink: ['/dice'],
      }
    ];

    console.log('Initial App State', this.appState.state);
  }

}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
