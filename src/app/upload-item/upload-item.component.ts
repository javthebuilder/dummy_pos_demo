import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-upload-item',
  imports: [TranslateModule, CommonModule],
  templateUrl: './upload-item.component.html',
  styleUrl: './upload-item.component.scss'
})
export class UploadItemComponent {

}
