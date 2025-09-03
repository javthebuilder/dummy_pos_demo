import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AddPeopleComponent } from '../add-people/add-people.component';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-people',
  imports: [TranslateModule, CommonModule, FormsModule, NgSelectModule],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
})
export class PeopleComponent {
  customersList = true;
  waitersList = false;
  adminsList = false;
  itemsPerPage = "10"

  constructor(private modalService: NgbModal) {
  }

  showCustomersList() {
    this.customersList = true;
    this.waitersList = false;
    this.adminsList = false;
  }
  showWaitersList() {
    this.customersList = false;
    this.waitersList = true;
    this.adminsList = false;
  }
  showAdminsList() {
    this.customersList = false;
    this.waitersList = false;
    this.adminsList = true;
  }

  addNew() {
    const modalRef = this.modalService.open(AddPeopleComponent, { windowClass: 'sideModel' });
  }

}
