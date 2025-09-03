import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-add-people',
  imports: [TranslateModule, CommonModule, FormsModule, NgSelectModule],
  templateUrl: './add-people.component.html',
  styleUrl: './add-people.component.scss'
})
export class AddPeopleComponent {
  people_type = '1';
  constructor(private modalService: NgbModal, private activeModal: NgbActiveModal) { }
  dismiss() {
    this.activeModal.close();
  }
}
