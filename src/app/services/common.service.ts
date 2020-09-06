import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  DARK_MODE = 'darkMode';
  formDataURL = 'https://script.google.com/macros/s/AKfycby5X7Ahx-_fquPmqNKkBwSzvg7gvD77ZI12eV0d9vWv4U9H6Qtc/exec';

  constructor(public storage: Storage, private _http: HttpClient) { }

  setDarkMode(bool: boolean) {
    this.storage.set(this.DARK_MODE, bool);
  }

  getDarkMode() {
    return this.storage.get(this.DARK_MODE);
  }

  postComments(formvalue) {
    var formData = new FormData();
    formData.append('name', formvalue.name);
    formData.append('email', formvalue.email);
    formData.append('comments', formvalue.comments);

    return this._http.post(
      this.formDataURL,
      formData,
      { responseType: 'text' }
    );

  }

  getComments() {
    return this._http.get(
      this.formDataURL,
      { responseType: 'text' }
    );
  }
}
