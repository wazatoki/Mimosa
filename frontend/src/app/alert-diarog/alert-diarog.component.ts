import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-diarog',
  templateUrl: './alert-diarog.component.html',
  styleUrls: ['./alert-diarog.component.css']
})
export class AlertDiarogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AlertDiarogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export interface DialogData {
  title: string;
  contents: string;
}
