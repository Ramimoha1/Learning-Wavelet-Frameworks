import { Component, inject, OnInit } from '@angular/core';
import { Todos } from '../../services/todos';

@Component({
  standalone: true ,
  selector: 'app-todo-items',
  imports: [],
  templateUrl: './todo-items.html',
  styleUrl: './todo-items.scss'
})
export class TodoItems implements OnInit {
  Todoservice = inject(Todos)
  ngOnInit():void {
    console.log(this.Todoservice.todoitems)
  }

}
