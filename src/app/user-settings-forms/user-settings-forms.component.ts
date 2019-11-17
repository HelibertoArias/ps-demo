import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-user-settings-forms',
  templateUrl: './user-settings-forms.component.html',
  styleUrls: ['./user-settings-forms.component.css']
})
export class UserSettingsFormsComponent implements OnInit {

  postError = false;
  postErrorMessage ='';

  originalUserSettings: UserSettings={
    name: null,
    emailOffers:null,
    interfaceStyle:null,
    subscriptionType: null,
    notes: null
  }

  //Simple copy
  userSettings : UserSettings = { ...this.originalUserSettings}

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onBlur(field : NgModel){
    console.log('in blur:',field.valid);
  }

  onHttpError(errorResponse:any){
    console.log('Error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;

  }
  onSubmit(form: NgForm){
      console.log('submit value: ', form.valid);

      if(form.valid){
        this.dataService
        .postUserSettingsForm(this.userSettings)
        .subscribe({
          next: result => console.log('success', result),
          error: err =>  this.onHttpError(err)
        });
      }else{
        this.postError =true;
        this.postErrorMessage = "Please fix the above errors.";
      }


  }

}
