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
  phonebook = [];

  constructor() {
  }

  // tslint:disable-next-line:typedef
  addNewPerson() {
    if (this.name !== '') {
      this.phonebook.push({
        name: this.name,
        phone: this.tel,
        email: this.email,
      });
      this.name = '';
      this.tel = '';
      this.email = '';
    }
  }

  // tslint:disable-next-line:typedef
  deletePerson(event?) {
    const person = event.target.closest('tr').remove();
  }
}
