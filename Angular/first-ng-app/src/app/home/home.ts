import { Component, signal } from '@angular/core';
import { Greetings } from '../components/greetings/greetings';
import { Countercomponent } from '../components/countercomponent/countercomponent';
import { Todos } from '../services/todos';

@Component({
  selector: 'app-home',
  imports: [Greetings , Countercomponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  providers: [Todos]
})
export class Home {
  message_to_child = signal("hello")
  keyUpHandler(event: KeyboardEvent) {
    console.log(`user typed ${event.key} `);
  }
  
}
