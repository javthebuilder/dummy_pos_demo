import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-add-expense',
  imports: [TranslateModule, CommonModule, FormsModule, NgSelectModule],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.scss'
})
export class AddExpenseComponent {
  expense_type = "1"
  @ViewChild('dateInput') dateInput!: ElementRef;
  today: string;
  constructor(private modalService: NgbModal, private activeModal: NgbActiveModal,) {
    const now = new Date();
    this.today = now.toISOString().substring(0, 10); // Format: YYYY-MM-DD
  }

  dismiss() {
    this.activeModal.close();
  }

  onDateChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    console.log('Selected date:', value);
  }

}
