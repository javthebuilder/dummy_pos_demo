import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { NgToggleModule } from 'ng-toggle-button';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-settings',
  imports: [TranslateModule, CommonModule, FormsModule, NgSelectModule, NgToggleModule, QuillModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  currency = "1";
  timezone = "2"; 
  editorContent = `<p style="text-align: center;"><strong>SUZLON RESTRO</strong><br>1024, Opera Park, New York, USA</p>`;

  quillModules = {
    toolbar: [
      ['bold', 'italic', 'underline'], // B, I, U
      [{ 'size': ['small', false, 'large', 'huge'] }], // Font size dropdown
      [{ 'color': [] }, { 'background': [] }], // Text & highlight color
      [{ 'list': 'ordered' }, { 'list': 'bullet' }], // Lists
      [{ 'align': [] }], // Text alignment
      [{ 'font': [] }] // Font family dropdown
    ]
  };
}
