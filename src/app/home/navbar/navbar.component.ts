import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  showDropDown = false;
  showDropDown2 = false;
  constructor() {

  }
  

  // dropdown(): boolean {
  //   return document.getElementsByClassName("hide")[0].classList.toggle("show");
  // }
  // dropdown2(): boolean {
  //   return document.getElementsByClassName("hide2")[0].classList.toggle("show");
  // }
btn(){
this.showDropDown = !this.showDropDown
}
btn1(){
  this. showDropDown2 = !this. showDropDown2

}



  ngOnInit(): void {

  }

}
