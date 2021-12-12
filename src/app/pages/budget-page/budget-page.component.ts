
import { Component, OnInit } from '@angular/core';
import Category from 'src/app/models/category.model';
import { NotifierService } from 'src/app/service/notifier.service';
import { MatDialog } from '@angular/material/dialog';
import { DataStorageService } from 'src/app/service/data-storage/data-storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-budget-page',
  templateUrl: './budget-page.component.html',
  styleUrls: ['./budget-page.component.css']
})
export class BudgetPageComponent implements OnInit {
  categories: Array<Category>;
  category: Category;
  type: string;
  startDate: any;
  endDate: any;
  balance= [
    {name:"Balance" , value:5000},
    {name:"Income" , value:10000},
    {name:"Expenses" , value:3000},
    {name:"Deposit" , value:2000},
  ];
  
  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];
  userDetails = JSON.parse(localStorage.getItem('UserDetails') || '{}');
  notifierSubscription: Subscription = this.notifierService.subjectNotifier.subscribe(notified => {
    this.ngOnChanges();
  });

  constructor(private dataStorageService: DataStorageService, public dialog: MatDialog, private notifierService: NotifierService) { 
    this.category = new Category(0, 0, "", "", "",0,0,0);
    this.type = "";
    this.categories=[];
    this.userDetails= JSON.parse(localStorage.getItem('UserDetails') || '{}');
    this.startDate = localStorage.startDate;
    this.endDate = localStorage.endDate;
  }

  ngOnInit(): void {
    this.userDetails= JSON.parse(localStorage.getItem('UserDetails') || '{}');
   ;
      this.categories=this.categories.sort((a, b) => (a.sum<b.sum) ? 1 : -1);
      this.dataStorageService.getUserBalance(this.userDetails.id, this.startDate, this.endDate).subscribe(
        (balance) => {
          console.log(balance);
          this.balance = balance;
          console.log(this.balance);
        }
      );

  }

  async ngOnChanges(): Promise<void> {
  }


  ngOnDestroy() {
    this.notifierSubscription.unsubscribe();
  }
}
