import { Observable } from 'rxjs';

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../modify-category/modify-category.component';
import TransactionModel from 'src/app/models/transaction.model';
import { DataStorageService } from 'src/app/service/data-storage/data-storage.service';

@Component({
  selector: 'app-modify-transaction',
  templateUrl: './modify-transaction.component.html',
  styleUrls: ['./modify-transaction.component.css']
})
export class ModifyTransactionComponent implements OnInit {
  transactionDTO: TransactionModel;
  description: string="";
  price: number=0;
  date: Date=new Date();
  categoryId: number=0;
  userId: number=0;


  constructor(
    public dialogRef: MatDialogRef<ModifyTransactionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dataStorageService: DataStorageService
  ) {
    this.transactionDTO = new TransactionModel(data.categoryId, "", new Date(), data.price, data.description, data.userId);
    this.description=data.description;
    this.price=data.price;
    this.date=new Date();
    this.categoryId=data.categoryId;
    this.userId=data.userId;
    this.userId = data.userId;

  }
  ngOnInit(): void {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addTransaction():void{
    this.transactionDTO.description=this.description;
    this.transactionDTO.price=this.price;
    this.transactionDTO.date=this.date;
    this.transactionDTO.categoryId=this.categoryId;
    this.dataStorageService.postTransaction(this.userId, this.transactionDTO).subscribe();
    this.dialogRef.close();
  }


}
