import Category from "src/app/models/category.model";
import { DataStorageService } from 'src/app/service/data-storage/data-storage.service';
import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import UserDetails from 'src/app/models/user-details.model';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModifyTransactionComponent } from "src/app/components/modals/modify-transaction/modify-transaction.component";
import { MatDialog } from "@angular/material/dialog";
import TransactionModel from "src/app/models/transaction.model";
import { Subscription } from "rxjs";
import { NotifierService } from "src/app/service/notifier.service";



@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit, OnDestroy, OnChanges {
  @Input() type: string = "";
  @Input() category!: Category;

  userDetails: UserDetails;
  categories: Array<Category>;
  modalRef!: MdbModalRef<ModifyTransactionComponent>;
  startDate: string;
  endDate: string;

  notifierSubscription: Subscription = this.notifierService.subjectNotifier.subscribe(notified => {
    this.ngOnChanges();
  });

  // transactionDTO: TransactionModel=new TransactionModel();
  name!: string;
  
  constructor(private dataStorageService: DataStorageService, public dialog: MatDialog, private notifierService: NotifierService) {  
    this.category = new Category(0, 0, "", "", "",0,0,0);
    this.type = "";
    this.categories=[];
    this.userDetails= localStorage.UserDetails;
    this.startDate = localStorage.startDate;
    this.endDate = localStorage.endDate;
    
  }
  ngOnInit(): void {
    this.dataStorageService.getCategories(localStorage.UserDetails, this.type, this.startDate, this.endDate).subscribe(
      async (categories) => {
        this.categories = categories;
        this.startDate = localStorage.startDate;
        this.endDate = localStorage.endDate;
        for(let category of this.categories){
          this.dataStorageService.getCategoryStats(category.id, localStorage.startDate, localStorage.endDate).subscribe(
            (stats) => {
                category.sum = stats.sum;
                category.count = stats.count;
                category.avg = stats.avg;
            }
          );
        }
      }
      );

  }

  async ngOnChanges(): Promise<void> {
    await this.dataStorageService.getCategories(localStorage.UserDetails, this.type, this.startDate, this.endDate).subscribe(
      (categories) => {
        console.log("this details id"+this.userDetails.id)
        console.log("this ls id"+localStorage.UserDetails.id)
        this.categories=categories;
        for(let category of categories){
          this.dataStorageService.getCategoryStats(category.id, localStorage.startDate, localStorage.endDate).subscribe(
            (stats) => {
                category.sum = stats.sum;
                category.count = stats.count;
                category.avg = stats.avg;
            }
          );
          this.categories=categories;
        }
      }
    );
    
    this.startDate = localStorage.startDate;
    this.endDate = localStorage.endDate;
     for(let category of this.categories){
      await this.dataStorageService.getCategoryStats(this.category.id, localStorage.startDate, localStorage.endDate).subscribe(
        (stats) => {
            this.category.sum = stats.sum;
            this.category.count = stats.count;
            this.category.avg = stats.avg;
        }

      );
    }
  }

  ngOnDestroy() {
    this.notifierSubscription.unsubscribe();
  }

  async openDialog(category: Category): Promise<void> {
     const dialogRef = this.dialog.open( ModifyTransactionComponent, {
      width: '250px',
      data: {type: category.type, userId: 1, categoryId: category.id}
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnChanges();
    }
    );
  }



}
