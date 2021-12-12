import { NotifierService } from './../../service/notifier.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { addDays, endOfISOWeek, endOfMonth, startOfISOWeek, startOfMonth } from 'date-fns';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-summary-module',
  templateUrl: './summary-module.component.html',
  styleUrls: ['./summary-module.component.scss']
})
export class SummaryModuleComponent implements OnInit {
  selectedDates: string;
  startDate: string;
  endDate: string;

  subjectNotifier: Subject<null> = new Subject<null>();
  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];

  constructor(private notifierService: NotifierService) { 
    this.selectedDates='today';
    this.startDate = new Date().toISOString().slice(0, 10);
    this.endDate = new Date().toISOString().slice(0, 10);
    localStorage.setItem('startDate', this.startDate);
    localStorage.setItem('endDate', this.endDate);
   }

  ngOnInit(): void {
    this.notifyForChange();
  }
  ngOnChanges() {
    this.notifyForChange();
  };

  notifyForChange() {
    this.notifierService.notifyAboutChange();
  }

  changeDate(range: string) {
    switch (range) {
      case 'today':{
        this.selectedDates = 'today';
        this.startDate = new Date().toISOString().slice(0, 10);
        this.endDate = new Date().toISOString().slice(0, 10);
        break;
      }
      case 'yesterday':{
        this.selectedDates = 'yesterday';
        this.startDate = ( d => new Date(d.setDate(d.getDate()-1)) )(new Date).toISOString().slice(0, 10);
        this.endDate = ( d => new Date(d.setDate(d.getDate()-1)) )(new Date).toISOString().slice(0, 10);
        break;
      }
      case 'week':{
        this.selectedDates = 'week';
        this.startDate = (addDays(startOfISOWeek(new Date()), 1)).toISOString().slice(0, 10);
        this.endDate = (endOfISOWeek(new Date())).toISOString().slice(0, 10);
        break;
      }
      case 'month':{
        this.selectedDates = 'month';
        this.startDate = (addDays(startOfMonth(new Date()), 1)).toISOString().slice(0, 10);
        this.endDate = (endOfMonth(new Date())).toISOString().slice(0, 10);
        break;
      }
      default: {
        break;
      }
    }
    localStorage.setItem('startDate', this.startDate);
    localStorage.setItem('endDate', this.endDate);
    this.notifyForChange();
  }

  notifyAboutChange() {
    this.subjectNotifier.next();
  }
}
