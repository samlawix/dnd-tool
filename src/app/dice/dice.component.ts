import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

import { RollLog } from './data-model/RollLog';
import { RollSubmission } from './data-model/RollSubmission';
import { UserList } from './data-model/UserList';

import { DiceService } from '../share/service/dice.service';

@Component({
  selector: 'dice',
  styleUrls: [
    './dice.component.css'
  ],
  templateUrl: './dice.component.html'
})
export class DiceComponent implements OnInit, OnDestroy {

  public localState: any;
  public username: string;

  public isLoginDialogVisible: boolean;

  public RollSubmitForm: FormGroup;
  public RollSubmitFormGroup = {
    name : ['', Validators.required ],
    reason : ['', Validators.required ],
    noOfDice : ['', Validators.required ],
    diceFace : ['', Validators.required ],
    adjustment : ['', Validators.required ]
  };
  public userList: UserList[];
  public rollLogList: RollLog[];

  constructor(
      public route: ActivatedRoute,
      private formBuilder: FormBuilder,
      private diceService: DiceService,
  ) {
    this.isLoginDialogVisible = false;
    this.username = '';

    this.createRollForm();
  }

  public checkLogin() {
    if(this.username.length !== 0){
      localStorage.setItem('username', this.username);
      this.isLoginDialogVisible = false;

      this.diceService.sendMessage('registerUser', this.username);
    }
  }

  public isConfirmButtonDisabled(){
    return (this.username === '') ? true : false;
  }

  public createRollForm(){
    this.RollSubmitForm = this.formBuilder.group(this.RollSubmitFormGroup);
    // this.RollSubmitForm.valid
  }

  public submitRoll(){
    this.diceService.sendMessage('submitDiceRoll', this.RollSubmitForm.value);
  }

  public initSocketEvents(){
    this.diceService.getMessage('userListUpdate').subscribe((res) => {
      // console.log(res);
      this.userList = res;
    });
    this.diceService.getMessage('rollLogUpdate').subscribe((res: RollLog[]) => {
      let _rollLog = res.reverse();
      // console.log(res);
      this.rollLogList = _rollLog;
    });
  }

  public ngOnInit() {
    this.initSocketEvents();
    // Block if user not logged in
    if(!localStorage.getItem('username')){
      this.isLoginDialogVisible = true;
    } else {
      this.isLoginDialogVisible = false;
      this.username = localStorage.getItem('username');

      this.diceService.sendMessage('registerUser', this.username);
    }

    // this.diceService.sendMessage('aaa');
  }

  public ngOnDestroy() {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.diceService.close();
  }

}
