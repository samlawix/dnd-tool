import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
 } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  DialogModule,
  InputTextModule,
  ButtonModule,
} from 'primeng/primeng';

import { routes } from './dice.routes';
import { DiceComponent } from './dice.component';

console.log('`Detail` bundle loaded asynchronously');

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    DiceComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),

    // Primeng import
    DialogModule,
    InputTextModule,
    ButtonModule,
  ],
  providers: [
    FormBuilder
  ]
})
export class DiceModule {
  public static routes = routes;
}
