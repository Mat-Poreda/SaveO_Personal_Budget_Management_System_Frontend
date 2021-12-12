import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import TransactionModel from 'src/app/models/transaction.model';
import { DataStorageService } from 'src/app/service/data-storage/data-storage.service';
import { DialogData } from '../modify-category/modify-category.component';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {
  transactions: TransactionModel[];

  constructor(
    public dialogRef: MatDialogRef<TransactionsListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dataStorageService: DataStorageService
  ) {
    this.transactions = data.transactions;
   }

  ngOnInit(): void {
  }

  delete(transaction: TransactionModel) {
    console.log(transaction);
    this.dataStorageService.deleteTransaction(transaction).subscribe(() => {  });
    this.transactions = this.transactions.filter(t => t.id !== transaction.id);
  }

}
