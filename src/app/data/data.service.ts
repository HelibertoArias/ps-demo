import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  postUserSettingsForm(userSettings: UserSettings): Observable<any>{
   // return of(userSettings)
    return this.httpClient.post('https://putsreq.com/c9ZI0XNLJKD941SgRUWa', userSettings);
  }
}
