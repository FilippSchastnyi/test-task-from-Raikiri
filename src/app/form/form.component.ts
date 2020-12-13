import {Component} from '@angular/core';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  name: '';
  tel: '';
  email: '';
  phonebook = [];

  constructor(svc: CommonService) {
  }

  // tslint:disable-next-line:typedef
  addNewPerson() {
    // tslint:disable-next-line:triple-equals
    if (this.name != '') {
      this.phonebook.push({
        name: this.name,
        phone: this.tel,
        email: this.email
      });
      this.name = '';
      this.tel = '';
      this.email = '';
      console.log(this.phonebook);
    }
  }
}
