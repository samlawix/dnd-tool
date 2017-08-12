import { DiceComponent } from './dice.component';

export const routes = [
  { path: '', children: [
    { path: '', component: DiceComponent },
    // { path: 'child-detail', loadChildren: './+child-detail#ChildDetailModule' }
  ]},
];
