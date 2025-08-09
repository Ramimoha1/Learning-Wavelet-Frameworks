import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { Photo } from '../Model/photo.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Photoservice {
  http = inject(HttpClient)
  apiUrl = environment.apiUrl
  getAllPhotonames() :  Observable<Photo[]>{
    return this.http.get<Photo[]>(`${this.apiUrl}/photos`)

  }
  removePhoto(id : String) {

    this.http.delete<Photo[]>(`${this.apiUrl}/photos/${id}`)

  }
}
