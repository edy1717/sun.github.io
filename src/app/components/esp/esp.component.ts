import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-esp',
  templateUrl: './esp.component.html',
  styleUrls: ['./esp.component.css']
})
export class EspComponent implements OnInit {

    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup : FormGroup;
  
    constructor(private _formBuilder: FormBuilder) {}
  
    ngOnInit() {
      this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', ]
      });
      this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', ]
      });
      this.thirdFormGroup = this._formBuilder.group({
        thirdCtrl: ['', ]
      });
    }
  }
