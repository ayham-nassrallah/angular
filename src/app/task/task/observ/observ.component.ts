import { Component, OnInit } from '@angular/core';
import { interval, Observable, observable, timeInterval, timeout } from 'rxjs';

@Component({
  selector: 'app-observ',
  templateUrl: './observ.component.html',
  styleUrls: ['./observ.component.scss']
})
export class ObservComponent implements OnInit {
  Glass: any = 0
  Avocado: any = 0
  flour:any=0
  constructor() { }

  ngOnInit(): void {

    this.createJuice();
    this.createBane();
  }
  createJuice() {
    const seconds = interval(10000);
    let gla = seconds.pipe(timeInterval())
      .subscribe(value => {
        this.Glass += 10
        if(this.Glass<=200){
        console.log("Glass="+this.Glass)
        }
        if (this.Glass == 200) {
          gla.unsubscribe()
          this.checkValue();
        }
      });

  let avog=  seconds.pipe(timeInterval())
      .subscribe(value => {
        this.Avocado += 10
        console.log("Avogado="+this.Avocado)
        if (this.Avocado == 500) {
          avog.unsubscribe()
          this.checkValue();
        }
      });
  }

  checkValue() {
    if (this.Glass== 200 && this.Avocado == 500) {
      console.log("you can start" ) 
    }
  }

createBane(){
  const seconds = interval(10000);
    let ban = seconds.pipe(timeInterval())
      .subscribe(value => {
        this.flour += 10
        if(this.flour<=1000){
          console.log("flour="+this.flour)
        }
        if(this.flour==1000){
          ban.unsubscribe()
        console.log("flour="+this.flour)
        this.checkBane()
        }
      });
}
checkBane(){
  if(this.flour==1000){
    console.log("you can star Bane")
  }
}

}
