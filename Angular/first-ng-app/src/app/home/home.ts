import { Component, signal } from '@angular/core';
import { Greetings } from '../components/greetings/greetings';
import { Countercomponent } from '../components/countercomponent/countercomponent';

@Component({
  selector: 'app-home',
  imports: [Greetings , Countercomponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  message_to_child = signal(" eat your proteins")
  keyUpHandler(event: KeyboardEvent) {
    console.log(`user typed ${event.key} nigga`);
  }
  
}
