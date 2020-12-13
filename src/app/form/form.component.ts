import {Component} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  name: '';
  tel: '';
  email: '';
  phonebook = [{
    name: 'Ivanov Ivan Ivanovich',
    tel: '+375 99 999 99 99',
    email: 'Ivanov@Ivanov.com'
  }];

  constructor() {
  }

  // tslint:disable-next-line:typedef
  addNewPerson() {
    if (this.name !== '') {
      this.phonebook.push({
        name: this.name,
        tel: this.tel,
        email: this.email,
      });
      this.name = '';
      this.tel = '';
      this.email = '';
    }
  }

  // tslint:disable-next-line:typedef
  deletePerson(event?) {
    event.target.closest('tr').remove();
  }
}
