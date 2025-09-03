import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { NgToggleModule } from 'ng-toggle-button';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-item',
  imports: [TranslateModule, CommonModule, FormsModule, NgSelectModule, NgToggleModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss'
})
export class AddItemComponent {
  item_category = "2";
  serving_for = "2";
  stockAvailibility = true;
  ingredients: string[] = [
    'Flour',
    'Sugar',
    'Baking powder',
    'Salt',
    'Egg',
    'Buter Milk',
    'Vegetable oil',
    'Butter'
  ];
  input: string = '';

  constructor(private location: Location) {
  }

  handleInput(event: KeyboardEvent) {
    if (event.key === ',' || event.key === 'Enter') {
      event.preventDefault();
      this.addIngredientsFromInput();
    }
  }

  addIngredientsFromInput() {
    const newItems = this.input
      .split(',')
      .map(item => item.trim())
      .filter(item => item.length > 0);

    this.ingredients.push(...newItems);
    this.input = '';
  }

  removeIngredient(index: number) {
    this.ingredients.splice(index, 1);
  }

  goBack(): void {
    this.location.back();
  }
}
