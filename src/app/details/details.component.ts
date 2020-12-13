import {Component} from '@angular/core';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  phonebook = [];

  constructor(private commonService: CommonService) {
  }

  // tslint:disable-next-line:typedef
  phonebookLog() {
    this.phonebook = this.commonService.setArray();
    console.log(this.phonebook);
  }
}
