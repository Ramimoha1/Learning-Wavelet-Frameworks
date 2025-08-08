import { Component, OnInit, signal } from '@angular/core';
import { Uploadphoto } from '../components/uploadphoto/uploadphoto';
import { Displayphoto } from '../components/displayphoto/displayphoto';

@Component({
  selector: 'app-photopage',
  imports: [Uploadphoto , Displayphoto],
  templateUrl: './photopage.html',
  styleUrl: './photopage.scss'
})
export class Photopage implements OnInit{
  view : 'upload' | 'media' = 'media'
  
  ngOnInit(){
    this.view = 'media'
  }
  
  changeView(view : 'upload' | 'media'){
    this.view = view

  }



}
