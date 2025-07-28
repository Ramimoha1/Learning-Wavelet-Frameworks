import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Todos } from '../../services/todos';
import { Todo } from '../../Model/to.do.type';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

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
  counter = signal(0)
  total = signal(0)
  ngOnInit():void {
    this.Todoservice.getArrayApi().pipe(catchError((error)=>{console.log(error)
      throw error
    })).subscribe((todolist) => { 
      this.todos.set(todolist)
      this.total.set(todolist.length)
      
    })
  }

  updatecounter(event: Event){
    const ischecked = (event.target as HTMLInputElement).checked
    if(ischecked){
      this.counter.update((value)=>value + 1)
    }
    else 
    {
      this.counter.update((value)=> value-1)
    }
  }
  totalstr = this.total.toString

  count = computed(() => `${this.counter()} / ${this.total()}`);


}
