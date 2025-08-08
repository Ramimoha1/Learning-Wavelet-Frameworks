import { NgIf } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-uploadphoto',
  imports: [],
  templateUrl: './uploadphoto.html',
  styleUrl: './uploadphoto.scss'
})
export class Uploadphoto {
  previewUrl: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];

      // Preview the image
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
}

