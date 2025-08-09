import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class Photoservice {
  http = inject(HttpClient)
  apiUrl = environment.apiUrl
  getAllPhotonames(){
    return this.http.get(`${this.apiUrl}/photos`)
  }
}
