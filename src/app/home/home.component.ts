import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  imports: [TranslateModule, CommonModule, CarouselModule, FormsModule, NgSelectModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  segment = 1;
  payment = "1";


  showSectionButton(position: number) {
    this.segment = position;
  }

  categoryCarousel: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    nav: false,
    margin: 15,
    navText: ['&#8249;', '&#8250;'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      600: {
        items: 4
      },
      740: {
        items: 7.5
      },
      1200: {
        items: 7.5
      },
    },
  };
}
