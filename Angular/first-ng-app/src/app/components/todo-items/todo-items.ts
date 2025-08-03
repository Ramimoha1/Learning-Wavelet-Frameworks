import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Todos } from '../../services/todos';
import { Todo } from '../../Model/to.do.type';
import { catchError } from 'rxjs';
import { formatCurrency, NgIf, UpperCasePipe } from '@angular/common';
import { HighlightCompletedTodo } from '../../directives/highlight-completed-todo';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../../pipes/filter-todos-pipe';


@Component({
  standalone: true ,
  selector: 'app-todo-items',
  imports: [NgIf , HighlightCompletedTodo , UpperCasePipe , FormsModule , FilterTodosPipe],
  templateUrl: './todo-items.html',
  styleUrl: './todo-items.scss'
})
export class TodoItems implements OnInit {
  searchTerm = signal("")
  
  loaded = signal<boolean>(false) 
  Todoservice = inject(Todos) ;
  todos = signal<Array<Todo>>([]) ;
  counter = signal(0)
  total = signal(0)
  ngOnInit():void {
    var initial = 0
    this.Todoservice.getArrayApi().pipe(catchError((error)=>{console.log(error)
      throw error
    })).subscribe((todolist) => { 
      this.todos.set(todolist)
      this.total.set(todolist.length)
      for ( const count of todolist)
      {
        if(count.completed == true )
        {
          initial++
        }
      }
      this.counter.set(initial) 
      this.loaded.set(true)
    })
  }

  updatecounter(event: Event , atodo : Todo){
    const ischecked = (event.target as HTMLInputElement).checked
    atodo.completed = ischecked
 // Update the actual todo
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
