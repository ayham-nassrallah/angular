import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { interval,timeInterval } from 'rxjs';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() value!: any;
  @Output() selectedValue = new EventEmitter();
  corpForm!: FormGroup;
  Glass:any=0
  Avocado:any=0
  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
    this.buildCorpForm();
    // this.createJuice();
  }
  getEvent(e: any) {
    this.selectedValue.emit(e.target.value)
    console.log('e.target.value=' + e.target.value)
  }
  delete(lessonIndex: number) {
    this.corps.removeAt(lessonIndex);
    const item = this.corps.at(lessonIndex - 1);
    this.calculatePercentage(item.value)
  }
  getValue(lessonIndex: number) {
    return this.corps.at(lessonIndex);
  }
  buildCorpForm() {
    this.corpForm = new FormGroup({
      corps: new FormArray([
        new FormGroup({
          corp: new FormControl("Wheat"),
          percentage: new FormControl(100)
        })
      ])
    })
  }
  get corps(): FormArray {
    return this.corpForm.controls['corps'] as FormArray
  }
  openDialog() {
    const opt = { data: { length: this.corps.controls.length + 1, options: ['Orange', 'pineapple', 'Apple', 'Corn', 'Wheat'] } }
    this.corps.controls.forEach(item => {
      if (opt.data.options.includes(item.value['corp'])) {
        const index = opt.data.options.findIndex(x => x == item.value['corp'])
        opt.data.options.splice(index, 1)
      }
    })
    const dialogRef = this.dialog.open(DialogComponent, opt);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`, result);
      if (result)
        this.corps.push(new FormGroup({
          corp: new FormControl(result['corp']),
          percentage: new FormControl(result['percentage'])
        }))
      this.calculatePercentage(result);
    });
  }
  calculatePercentage(result: any) {
    //this.corps.value[0]
    //this.corps.value[0].percentage = 50
    let index = this.corps.controls.findIndex(x => x.value['corp'] === result['corp']);
    this.corps.controls.forEach((item, i) => {
      let percent = 100 - result['percentage'];
      if (this.corps.length === 1) {
        item.value['percentage'] = 100
        item.value['corp'] = "Wheat"
      }
      if (i != index) {
        switch (this.corps.length) {
          case 2: {
            item.value['percentage'] = percent; 
            break;
          }
          case 3: {
            if (result['percentage'] == "100") {
              item.value['percentage'] = percent + 25
              this.corps.value[0].percentage = 50
              this.corps.value[2].percentage = 25
            }
            if (result['percentage'] == "75") {
              item.value['percentage'] = percent
              this.corps.value[0].percentage = 0
            }
            if (result['percentage'] == "50") {
              item.value['percentage'] = 25
            }
            if (result['percentage'] == "50" && index==0) {
              this.corps.value[0].percentage = 50
              this.corps.value[1].percentage = 25
              this.corps.value[2].percentage = 25
            }
             if (result['percentage'] == "50" && index==1) {
              this.corps.value[0].percentage = 25
              this.corps.value[1].percentage = 50
              this.corps.value[2].percentage = 25
            }
            if (result['percentage'] == "50" && index == 2) {
              this.corps.value[0].percentage = 25
              this.corps.value[1].percentage = 25
              this.corps.value[2].percentage = 50
            }
            if (result['percentage'] == "25") {
              item.value['percentage'] = 50
              this.corps.value[1].percentage = 25
            }
            if (result['percentage'] == "75" &&index==1) { 
              this.corps.value[0].percentage = 0
              this.corps.value[1].percentage = 75
              this.corps.value[2].percentage = 25
            }
            if (result['percentage'] == "75" &&index==2) { 
              this.corps.value[0].percentage = 0
              this.corps.value[1].percentage = 25
              this.corps.value[2].percentage = 75
            }
            if (result['percentage'] == "25" &&index==1) { 
              this.corps.value[0].percentage = 25
              this.corps.value[1].percentage = 25
              this.corps.value[2].percentage = 50
            }
            if (result['percentage'] == "0" &&index==0) {
              item.value['percentage'] = 50
              this.corps.value[0].percentage = 0
              this.corps.value[1].percentage = 50
              this.corps.value[2].percentage = 50
            }
            break;
          }
          case 4: {
            if (result['percentage'] == "25") {
              item.value['percentage'] = 25
              this.corps.value[0].percentage = 25
              this.corps.value[1].percentage = 25
              this.corps.value[2].percentage = 25
            }
            if (result['percentage'] == "50" && index == 3) {
              item.value['percentage'] = 25
              this.corps.value[0].percentage = 0
              this.corps.value[1].percentage = 25
              this.corps.value[3].percentage = 50
            }
            if (result['percentage'] == "50" && index == 2) {
              this.corps.value[0].percentage = 0
              this.corps.value[1].percentage = 25
              this.corps.value[2].percentage = 50
              this.corps.value[3].percentage = 25
            }
            if (result['percentage'] == "50" && index == 1) {
              this.corps.value[0].percentage = 0
              this.corps.value[1].percentage = 50
              this.corps.value[2].percentage = 25
              this.corps.value[3].percentage = 25
            }
            if (result['percentage'] == "0" && index == 0) {
              this.corps.value[0].percentage = 0
              this.corps.value[1].percentage = 50
              this.corps.value[2].percentage = 25
              this.corps.value[3].percentage = 25
            }
            if (result['percentage'] == "75" && index == 2) {
              this.corps.value[0].percentage = 0
              this.corps.value[1].percentage = 25
              this.corps.value[2].percentage = 25
              this.corps.value[3].percentage = 50
            }
            break;
          }
        }
      }
    });
  }
  
//task RxJx Method
//   createJuice() {
//     const seconds = interval(10000);
//     seconds.pipe(timeInterval())
//       .subscribe(
//         value => this.Glass = +10,
//       );
//     seconds.pipe(timeInterval())
//       .subscribe(
//         value => this.Avocado = +10,
//       );
// }
// setTimeout(() => {
//   this.Glass=this.Glass=+10;
//   this.Avocado=this.Avocado=+10;
//   console.log('Glass After 10 Secound='+this.Glass)
//   console.log('Avocado After 10 Secound='+this.Glass)
// }, 10000);
// return
   
//  const KiloOfAvocado=this.Avocado.subscribe( console.log('Value Of Avocado: '+this.Avocado ))

  





}

