import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.scss']
})
export class PercentageComponent implements OnInit {
  @Input() value!: any;
  @Input() length!: any;
  @Input() corp!: any;
  @Input() index!: any;
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() selectedPercent = new EventEmitter();
  zero: any = false
  per: any = [100, 75, 50, 25, 0]
  constructor() { }
  ngOnInit(): void {
    // console.log(this.length) set length of ArrayForm
    // console.log('swe='+this.index) Set Number of Index in Array Form 
    // console.log("value="+this.value) Set value from index in Array Form 
    this.enableAndDisable(this.value);
  }
  addNewItem(value: any) {
    this.newItemEvent.emit(value);
  }
  enableAndDisable(value: number) {
    if (this.length == 1 && value == 100) {
      return false
    }
    if (this.length == 1 && value != 100) {
      return true
    } else if (this.length == 2) {
      if (this.index == 0 && value == 100) {
        console.log("len 2 ", value);
        return true
      }
      if (this.index == 1 && value == 0) {
        return true
      }
    } else if (this.length == 3) {
      if (this.length == 3 && value == 100) {
        return true
      }
      if (this.index == 0 && value == 75) {
        return true
      }
      if (this.index == 0 && (value == 100 || value == 75)) {
        return true
      }
      if (this.index == 1 && (value == 100 || value == 0)) {
        return true
      }
      if (this.index == 2 && (value == 100 || value == 0)) {
        return true
      }
    }
    else if (this.length == 4) {
      if (this.length == 4 && value == 100) {
        return true
      }
      if (this.length == 4 && value == 75) {
        return true
      }
      if (this.index == 0 && (value == 100 || value == 75 || value == 50)) {
        return true
      }
      if (this.index == 1 && (value == 100 || value == 75 || value == 0)) {
        return true
      }
      if (this.index == 2 && (value == 100 || value == 75 || value == 0)) {
        return true
      }
      if (this.index == 3 && (value == 100 || value == 75 || value == 0)) {
        return true
      }
    }
    return false;
  }
  set(e: any) {
    this.selectedPercent.emit({ corp: this.corp, percentage: e.target.value })
    this.value = e.target.value
  }
}

