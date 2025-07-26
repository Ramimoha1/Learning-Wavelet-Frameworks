import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-countercomponent',
  imports: [],
  templateUrl: './countercomponent.html',
  styleUrl: './countercomponent.scss'
})
export class Countercomponent {

  counter = signal(0);
  increment(){
    this.counter.set(this.counter()+1);
  }
  decrement(){
     this.counter.set(this.counter()-1);
  }
  reset(){
     this.counter.set(0);
  }

}
