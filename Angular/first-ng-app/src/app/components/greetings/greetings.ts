import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-greetings',
  imports: [],
  templateUrl: './greetings.html',
  styleUrl: './greetings.scss'
})
export class Greetings {
  message = input("hello world")

}
