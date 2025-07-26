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
    this.counter.update((value) => value + 1 );
  }
  decrement(){
     this.counter.update((value) => value - 1 );
  }
  reset(){
     this.counter.update(() => 0 );
  }

}
