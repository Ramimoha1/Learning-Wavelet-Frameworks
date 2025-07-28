import { Component, signal } from '@angular/core';
import { Greetings } from '../components/greetings/greetings';
import { Countercomponent } from '../components/countercomponent/countercomponent';

@Component({
  selector: 'app-counterpage',
  imports: [Countercomponent],
  templateUrl: './counterpage.html',
  styleUrl: './counterpage.scss'
})
export class Counterpage {
  
  keyUpHandler(event: KeyboardEvent) {
    console.log(`user typed ${event.key} `);
  }

}
