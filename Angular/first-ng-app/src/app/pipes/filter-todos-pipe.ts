import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../Model/to.do.type';

@Pipe({
  name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {

  transform(value: Todo[], searchTerm : String): Todo[] {
    if(!searchTerm){
      return value 
    }
    const search = searchTerm.toLowerCase()
    return value.filter((value)=>value.title.toLowerCase().includes(search))
  }

}
