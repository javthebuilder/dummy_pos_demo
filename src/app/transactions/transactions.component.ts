import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { AddExpenseComponent } from '../add-expense/add-expense.component';
import { RecieptComponent } from '../reciept/reciept.component';

@Component({
  selector: 'app-transactions',
  imports: [TranslateModule, CommonModule, FormsModule, NgSelectModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {
  salesList = true;
  expenseList = false;
  itemsPerPage = "10"

  constructor(private router: Router, private modalService: NgbModal) {
  }
  showSalesList() {
    this.salesList = true;
    this.expenseList = false;
  }

  showExpenseList() {
    this.salesList = false;
    this.expenseList = true;
  }

  add_item() {
    this.router.navigateByUrl('add-item');
  }

  addExpense() {
    const modalRef = this.modalService.open( AddExpenseComponent, { windowClass: 'sideModel' });
  }
  reciept() {
    const modalRef = this.modalService.open( RecieptComponent, { windowClass: 'sideModel recieptModel' });
  }
}
