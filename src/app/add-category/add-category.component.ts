import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-add-category',
  imports: [TranslateModule, CommonModule, FormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent {
  constructor(private modalService: NgbModal, private activeModal: NgbActiveModal) { }
  dismiss() {
    this.activeModal.close();
  }
}
