import { Injectable } from '@angular/core';
import { Todo } from '../Model/to.do.type';
@Injectable({
  providedIn: 'root'
})
export class Todos {
  todoitems : Array<Todo> = [ 
    {
      userId : 1 ,
      completed: false ,
      title : "learning angular" ,
      id: 0,
    } ,
    {
      userId : 2 ,
      completed: false ,
      title : "learning spring boot" ,
      id: 1,
    } ,
    {
      userId : 3,
      completed: false ,
      title : "learning postgress" ,
      id: 2,
    }
    
  ]

}
