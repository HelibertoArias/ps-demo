import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-forms',
  templateUrl: './user-settings-forms.component.html',
  styleUrls: ['./user-settings-forms.component.css']
})
export class UserSettingsFormsComponent implements OnInit {

  userSettings: UserSettings={
    name: 'Milton',
    emailOffers:true,
    interfaceStyle:'dark',
    subscriptionType: 'Lifetime',
    notes: 'Here are some notes...'
  }

  constructor() { }

  ngOnInit() {
  }

}
