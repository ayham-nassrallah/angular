import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() length!: any;
  @Input() selectper:any;
  corpForm!: FormGroup;
  constructor(private matDialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: { length: number,options: any[] }  ) { }
  ngOnInit(): void {
    this.buildCorpsForm()
  }
  buildCorpsForm() {
    this.corpForm = new FormGroup({
      corp: new FormControl("", Validators.required),
      percentage: new FormControl(  this.data.length == 0? 100: 0, Validators.required)
    })
  }
  setPercentage(percentage: any) {
    this.corpForm.controls['percentage'].setValue(percentage['percentage'])
  }
  save() {
    if (this.corpForm.valid)
      this.matDialogRef.close(this.corpForm.value);
  }
  closeDialog() {
    this.matDialogRef.close();
  }
}
