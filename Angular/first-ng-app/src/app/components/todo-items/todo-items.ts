import { Component, inject, OnInit, signal } from '@angular/core';
import { Todos } from '../../services/todos';
import { Todo } from '../../Model/to.do.type';

@Component({
  standalone: true ,
  selector: 'app-todo-items',
  imports: [],
  templateUrl: './todo-items.html',
  styleUrl: './todo-items.scss'
})
export class TodoItems implements OnInit {
  Todoservice = inject(Todos) ;
  todos = signal<Array<Todo>>([]) ;
  ngOnInit():void {
    console.log(this.Todoservice.todoitems)
    this.todos.set(this.Todoservice.todoitems)
    
  }

}
