import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
import {
  FormControl,
  FormGroup,
  FormBuilder
} from '@angular/forms';

import { RollLog } from './data-model/RollLog';
import { RollSubmission } from './data-model/RollSubmission';
=======
import { DiceService } from '../share/service/dice.service';
>>>>>>> 3554fbe8455d26d379f7a50d7f6de1bcc9bea7fd

@Component({
  selector: 'dice',
  styleUrls: [
    './dice.component.css'
  ],
  templateUrl: './dice.component.html'
})
export class DiceComponent implements OnInit {

<<<<<<< HEAD
  public localState: any;
  public username: string;

  public isLoginDialogVisible: boolean;

  public RollSubmitForm: FormGroup;
  public RollSubmitObject: RollSubmission = {
    name: '',
    reason: '',
    noOfDice: '',
    diceFace: '',
    adjustment: ''
  }

  constructor(
    public route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.isLoginDialogVisible = false;
    this.username = '';

    this.createRollForm();
  }

  public checkLogin() {
    if(this.username.length !== 0){
      localStorage.setItem('username', this.username);
      this.isLoginDialogVisible = false;
    }
  }

  public isConfirmButtonDisabled(){
    return (this.username === '') ? true : false;
  }

  public createRollForm(){
    this.RollSubmitForm = this.formBuilder.group(this.RollSubmitObject);
  }

  public ngOnInit() {
    // Block if user not logged in
    if(!localStorage.getItem('username')){
      this.isLoginDialogVisible = true;
    } else {
      this.isLoginDialogVisible = false;
      this.username = localStorage.getItem('username');
    }

    this.route
      .data
      .subscribe((data: any) => {
        /**
         * Your resolved data from route.
         */
        this.localState = data.yourData;
      });
=======
  public userList: string[];
  // public localState: any;

  constructor(
    public route: ActivatedRoute,
    private diceService: DiceService,
  ) {}

  public ngOnInit() {
    // this.route
    //   .data
    //   .subscribe((data: any) => {
    //     /**
    //      * Your resolved data from route.
    //      */
    //     this.localState = data.yourData;
    //   });
>>>>>>> 3554fbe8455d26d379f7a50d7f6de1bcc9bea7fd

    console.log('hello `About` component');
    /**
     * static data that is bundled
     * var mockData = require('assets/mock-data/mock-data.json');
     * console.log('mockData', mockData);
     * if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
     */
    // this.asyncDataWithWebpack();

    this.diceService.sendMessage('aaa');
  }
  // private asyncDataWithWebpack() {
  //   /**
  //    * you can also async load mock data with 'es6-promise-loader'
  //    * you would do this if you don't want the mock-data bundled
  //    * remember that 'es6-promise-loader' is a promise
  //    */
  //   setTimeout(() => {

  //     System.import('../../assets/mock-data/mock-data.json')
  //       .then((json) => {
  //         console.log('async mockData', json);
  //         this.localState = json;
  //       });

  //   });
  // }

}
