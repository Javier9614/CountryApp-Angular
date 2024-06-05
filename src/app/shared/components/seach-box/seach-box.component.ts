import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'shared-seach-box',
  templateUrl: './seach-box.component.html',
  styles: ``
})
export class SeachBoxComponent {

  @Input()
  public placeholder:string ="";

  //esta mierda es el tipo de evento que recibes en by capital html joder
  @Output()
  onValue:EventEmitter<string> = new EventEmitter();

  emitValue(value:string):void{
    // setTimeout(()=>{
    // }, 1500);
    this.onValue.emit(value);
  }

}
