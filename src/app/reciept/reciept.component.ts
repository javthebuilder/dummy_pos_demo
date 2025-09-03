import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-reciept',
  imports: [TranslateModule, CommonModule, FormsModule],
  templateUrl: './reciept.component.html',
  styleUrl: './reciept.component.scss'
})
export class RecieptComponent {

  constructor(private modalService: NgbModal, private activeModal: NgbActiveModal) { }
  dismiss() {
    this.activeModal.close();
  }

  printData() {
    const printContents = document.getElementById('print-section')?.innerHTML;
    const originalContents = document.body.innerHTML;

    if (printContents) {
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      location.reload(); // Optional: reload to restore bindings
    }
  }

}
