import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-orders-status',
  imports: [TranslateModule, CommonModule],
  templateUrl: './orders-status.component.html',
  styleUrl: './orders-status.component.scss'
})
export class OrdersStatusComponent {

}
