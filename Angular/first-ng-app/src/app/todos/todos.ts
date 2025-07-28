import { Component } from '@angular/core';
import { TodoItems } from '../components/todo-items/todo-items';

@Component({
  selector: 'app-todos',
  imports: [TodoItems],
  templateUrl: './todos.html',
  styleUrl: './todos.scss'
})
export class Todos {

}
