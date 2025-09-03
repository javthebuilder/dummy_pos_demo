import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexGrid, ApexLegend, ApexPlotOptions, ApexTheme, ApexTooltip, ApexXAxis, ApexYAxis, ChartComponent, NgApexchartsModule } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: any;
  theme: ApexTheme;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  markers: any;
  grid: ApexGrid;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  labels: string[];
};

@Component({
  selector: 'app-dashboard',
  imports: [TranslateModule, CommonModule, NgSelectModule, FormsModule, NgApexchartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  timeSlect = "2"
  sales = true;
  revenue = false;
  orders = false;
  public salesoverviewChart: Partial<ChartOptions> | any;

  constructor() {

    this.salesoverviewChart = {
      series: [26, 10, 26, 9, 12, 16, 32, 6],

      chart: {
        type: 'donut',
        fontFamily: "Poppins",

        toolbar: {
          show: false,
        },
        // height: 150,
      },
      labels: ['Fast Food', 'Italian', 'Main Course', 'Starter', 'Beverages', 'Indian', 'Dessert', 'Other'],
      colors: ['#e21e1f', '#019645', '#f09514', '#8e37e7', '#f02899', '#898989', '#03b8ff', '#3337f0',],
      plotOptions: {
        pie: {
          donut: {
            size: '60%',
            background: 'transparent',

            labels: {
              show: true,
              name: {
                show: true,
                offsetY: 7,
              },
              value: {
                show: false,
              },
              total: {
                show: false,
                color: '#2A3547',
                fontSize: '20px',
                fontWeight: '600',
                label: '2,074',
              },
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: false,
      },
      legend: {
        show: false,
      },
      tooltip: {
        theme: 'dark',
        fillSeriesColor: false,
      },
    };
  }


  showSalesGraph() {
    this.sales = true;
    this.revenue = false;
    this.orders = false;
  }
  showRevenueGraph() {
    this.sales = false;
    this.revenue = true;
    this.orders = false;
  }
  showOrdersGraph() {
    this.sales = false;
    this.revenue = false;
    this.orders = true;
  }
}
