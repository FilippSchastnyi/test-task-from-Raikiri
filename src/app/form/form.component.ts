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

  constructor(private commonService: CommonService) {

  }

  // tslint:disable-next-line:typedef
  addNewPerson() {
    if (this.name !== '') {
      this.phonebook.push({
        name: this.name,
        phone: this.tel,
        email: this.email
      });
      this.name = '';
      this.tel = '';
      this.email = '';
    }
    this.commonService.getArray(this.phonebook);
  }
}
