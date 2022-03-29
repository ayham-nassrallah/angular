import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ModelProject';
  btn = 2;
  currentItem1 = 'television';
  currentItem2 = 'phone';
  currentItem3 = 'tel';
  currentItem4 = 'sell';


  items = ['itemA', 'itemB']
  addItem(newItem: string) {
    this.items.push(newItem);
    this.clearInput();

  }
  clearInput() {
    let Input = <HTMLInputElement>document.getElementById('item-input');
    Input.value = '';
  }
}
