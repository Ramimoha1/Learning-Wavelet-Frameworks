import { inject, Injectable } from '@angular/core';
import { Todo } from '../Model/to.do.type';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Todos {
  // todoitems : Array<Todo> = [ 
  //   {
  //     userId : 1 ,
  //     completed: false ,
  //     title : "learning angular" ,
  //     id: 0,
  //   } ,
  //   {
  //     userId : 2 ,
  //     completed: false ,
  //     title : "learning spring boot" ,
  //     id: 1,
  //   } ,
  //   {
  //     userId : 3,
  //     completed: false ,
  //     title : "learning postgress" ,
  //     id: 2,
  //   }
    
  // ]
  http = inject(HttpClient)
  getArrayApi(){
    const url = 'https://jsonplaceholder.typicode.com/todos/'
    return this.http.get <Array<Todo>>(url)
  }

}
