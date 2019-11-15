import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-settings-forms',
  templateUrl: './user-settings-forms.component.html',
  styleUrls: ['./user-settings-forms.component.css']
})
export class UserSettingsFormsComponent implements OnInit {

  originalUserSettings: UserSettings={
    name: null,
    emailOffers:null,
    interfaceStyle:null,
    subscriptionType: null,
    notes: null
  }

  //Simple copy
  userSettings : UserSettings = { ...this.originalUserSettings}

  constructor() { }

  ngOnInit() {
  }

  onBlur(field : NgModel){
    console.log('in blur:',field.valid);
  }

  onSubmit(form: NgForm){
      console.log('submit value: ', form.valid);
  }

}
