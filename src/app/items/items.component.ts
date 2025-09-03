import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { AddCategoryComponent } from '../add-category/add-category.component';

@Component({
  standalone: true,
  selector: 'app-items',
  imports: [TranslateModule, CommonModule, FormsModule, NgSelectModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent {
  foodItemList = true;
  categoriesList = false;
  itemsPerPage = "10"

  constructor(private router: Router, private modalService: NgbModal) {
  }
  showFoodItemList() {
    this.foodItemList = true;
    this.categoriesList = false;
  }

  showCategoriesList() {
    this.foodItemList = false;
    this.categoriesList = true;
  }

  add_item() {
    this.router.navigateByUrl('add-item');
  }

  addCategory() {
    const modalRef = this.modalService.open(AddCategoryComponent, { windowClass: 'sideModel' });
  }
}
