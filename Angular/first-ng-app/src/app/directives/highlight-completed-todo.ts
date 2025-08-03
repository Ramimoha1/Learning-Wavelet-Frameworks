import { Directive , input , effect, inject, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]'
})
export class HighlightCompletedTodo {
  element = inject(ElementRef)
  isCompleted = input(false)
  constructor() { }
  styleEffect = effect(()=>{
    if(this.isCompleted())
    {
      this.element.nativeElement.style.textDecoration = 'line-through'
      this.element.nativeElement.style.backgroundColor = '#d3f9d8'
      this.element.nativeElement.style.color = '#6c757c'
    }
    else
    {
   
  this.element.nativeElement.style.textDecoration = 'none'
  this.element.nativeElement.style.backgroundColor = '#fff'
  this.element.nativeElement.style.color = '#000'
    }

  })


}
