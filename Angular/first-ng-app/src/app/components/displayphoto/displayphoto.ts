import { Component, inject, OnInit, signal } from '@angular/core';
import { Photoservice } from '../../services/photoservice';
import { catchError, throwError } from 'rxjs';
import { Photo } from '../../Model/photo.interface';

@Component({
  selector: 'app-displayphoto',
  imports: [],
  templateUrl: './displayphoto.html',
  styleUrl: './displayphoto.scss'
})
export class Displayphoto implements OnInit{
   photoservice = inject(Photoservice)

   photo = signal<Photo[]>([])

   ngOnInit(): void {
      this.photoservice.getAllPhotonames()
    .pipe(
      catchError((error) => {
        console.error('Error fetching photo names:', error);
        return throwError(() => error);
      })
    )
    .subscribe({
      next: (photos) => this.photo.set(photos),
      error: (err) => {
        // Optional: handle error at subscription level
        console.error('Subscription error:', err);
      }
    });
   }

   

}
