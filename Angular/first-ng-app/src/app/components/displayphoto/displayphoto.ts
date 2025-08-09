import { Component, inject } from '@angular/core';
import { Photoservice } from '../../services/photoservice';

@Component({
  selector: 'app-displayphoto',
  imports: [photo],
  templateUrl: './displayphoto.html',
  styleUrl: './displayphoto.scss'
})
export class Displayphoto {
  const photoservice = inject(Photoservice)

}
