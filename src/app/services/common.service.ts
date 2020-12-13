import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  phonebook = [];

  constructor() {
  }

  // tslint:disable-next-line:typedef
  getArray(arr) {
    this.phonebook = arr;
  }

  // tslint:disable-next-line:typedef
  setArray() {
    return this.phonebook;
  }
}
