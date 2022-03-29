import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private e :ElementRef  ) {
 

    e.nativeElement.style.color="red"
    e.nativeElement.style.border= '1px solid black'
    

   }
}
