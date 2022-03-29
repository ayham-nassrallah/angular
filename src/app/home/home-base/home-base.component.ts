import { Component, EventEmitter, Input, OnInit, Output, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  NgbDateStruct, NgbCalendar, NgbCalendarIslamicUmalqura, NgbDatepickerI18n, NgbCalendarIslamicCivil
} from '@ng-bootstrap/ng-bootstrap';




const WEEKDAYS = ['ن', 'ث', 'ر', 'خ', 'ج', 'س', 'ح'];
const MONTHS = ['محرم', 'صفر', 'ربيع الأول', 'ربيع الآخر', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوال',
  'ذو القعدة', 'ذو الحجة'];

@Injectable()
export class IslamicI18n extends NgbDatepickerI18n {
  getMonthShortName(month: number) {
    return MONTHS[month - 1];
  }

  getMonthFullName(month: number) {
    return MONTHS[month - 1];
  }

  getWeekdayLabel(weekday: number) {
    return WEEKDAYS[weekday - 1];
  }

  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
}


@Component({
  selector: 'app-home-base',
  templateUrl: './home-base.component.html',
  styleUrls: ['./home-base.component.scss'],
  providers: [
    { provide: NgbCalendar, useClass: NgbCalendarIslamicCivil },
    { provide: NgbDatepickerI18n, useClass: IslamicI18n }
  ]
})

export class HomeBaseComponent implements OnInit {


  constructor(public route: Router, private calendar: NgbCalendar) { }
  model!: NgbDateStruct;
  selectToday() {
    this.model = this.calendar.getToday();
  }
  
  ngOnInit(): void {
  }
  name: string = ''

  @Input() item1 = 'aaa'
  @Input() item2 = 'bbb'
  @Input() item3 = 'ccc'
  @Input() item4 = 'ddd'
  @Output() newItemEvent = new EventEmitter<string>();


  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  firstForm = new FormGroup({
    FirstName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    LastName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ])
  });
  save() {
    this.firstForm.markAllAsTouched()
    console.log(this.firstForm.value)
    alert("seccsuce")
    this.firstForm.reset();
  }
  getData(e: any) {
    console.log("hello")
  }


}
