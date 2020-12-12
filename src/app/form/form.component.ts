import {Component} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  val: string;
  title = '';
  constructor() {
  }

  // tslint:disable-next-line:typedef
  addNewPerson() {
    console.log('hello');
  }
}
