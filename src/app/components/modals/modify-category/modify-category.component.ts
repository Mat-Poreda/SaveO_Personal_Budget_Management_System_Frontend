
import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,} from '@angular/material/dialog';
import { DialogModifyCategory } from '../dialog-modify-category/dialog-modify-category.component';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-modify-category',
  templateUrl: './modify-category.component.html',
  styleUrls: ['./modify-category.component.css']
})
export class ModifyCategoryComponent implements OnInit {


  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {
    this.animal = 'panda';
    this.name = 'Angular';
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogModifyCategory, {
      width: '250px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
