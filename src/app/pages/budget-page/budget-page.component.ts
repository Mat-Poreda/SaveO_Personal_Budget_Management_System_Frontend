
import { Component, OnInit } from '@angular/core';
import Category from 'src/app/models/category.model';
import { NotifierService } from 'src/app/service/notifier.service';
import { MatDialog } from '@angular/material/dialog';
import { DataStorageService } from 'src/app/service/data-storage/data-storage.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-budget-page',
  templateUrl: './budget-page.component.html',
  styleUrls: ['./budget-page.component.css']
})
export class BudgetPageComponent implements OnInit {
  type: string;
  startDate: any;
  endDate: any;
  update$: Subject<any> = new Subject();
  balance= [
    {name:"" , value:0},
  ];
  income= [
    {name:"" , value:0},
  ];
  expense= [
    {name:"" , value:0},
  ];
  deposit= [
    {name:"" , value:0},
  ];
  
  userDetails = JSON.parse(localStorage.getItem('UserDetails') || '{}');
  notifierSubscription: Subscription = this.notifierService.subjectNotifier.subscribe(notified => {
    this.ngOnChanges();
  });

  constructor(private dataStorageService: DataStorageService, public dialog: MatDialog, private notifierService: NotifierService) { 

    this.type = "";
    this.userDetails= JSON.parse(localStorage.getItem('UserDetails') || '{}');
    this.startDate = localStorage.startDate;
    this.endDate = localStorage.endDate;
  }

  ngOnInit(): void {
    this.userDetails= JSON.parse(localStorage.getItem('UserDetails') || '{}');
      this.dataStorageService.getUserBalance(this.userDetails.id, this.startDate, this.endDate).subscribe(
        (balance) => {
          this.balance = balance;
        }
      );

      this.dataStorageService.getCategoryStatsByType(this.userDetails.id, localStorage.startDate, localStorage.endDate, 'INCOME').subscribe(
        (income) => {
          console.log(income);
          this.income = income;
        }
      );
      this.dataStorageService.getCategoryStatsByType(this.userDetails.id, localStorage.startDate, localStorage.endDate, 'EXPENSE').subscribe(
        (expense) => {
          console.log(expense);
          this.expense = expense;
        }
      );
      this.dataStorageService.getCategoryStatsByType(this.userDetails.id, localStorage.startDate, localStorage.endDate, "DEPOSIT").subscribe(
        (deposit) => {
          console.log(deposit);
          this.deposit = deposit;
        }
      );

  }


  ngOnChanges(): void {
    this.dataStorageService.getUserBalance(this.userDetails.id, localStorage.startDate, localStorage.endDate).subscribe(
      (balance) => {
        this.balance = balance;
      }
    );

    this.dataStorageService.getCategoryStatsByType(this.userDetails.id, localStorage.startDate, localStorage.endDate, "INCOME").subscribe(
      (income) => {
        this.income = income;
      }
    );
    this.dataStorageService.getCategoryStatsByType(this.userDetails.id, localStorage.startDate, localStorage.endDate, "EXPENSE").subscribe(
      (expense) => {
        this.expense = expense;
      }
    );
    this.dataStorageService.getCategoryStatsByType(this.userDetails.id, localStorage.startDate, localStorage.endDate, "DEPOSIT").subscribe(
      (deposit) => {
        console.log(deposit);
        this.deposit = deposit;
      }
    );
    this.updateChart();
  }


  ngOnDestroy() {
    this.notifierSubscription.unsubscribe();
  }
  updateChart(){
    this.update$.next(true);
}
}
