import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../modify-category/modify-category.component';

@Component({
  selector: 'app-dialog-modify-category',
  templateUrl: './dialog-modify-category.component.html',
  styleUrls: ['./dialog-modify-category.component.css']
})

@Component({
  selector: 'dialog-modify-category',
  templateUrl: 'dialog-modify-category.html',
})
export class DialogModifyCategory {
  constructor(
    public dialogRef: MatDialogRef<DialogModifyCategory>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
