import { Component, Input } from '@angular/core';
import { Doctor } from '../interfaces/doctor.interface';

@Component({
  selector: 'app-image-title-description',
  templateUrl: './image-title-description.component.html',
  styleUrls: ['./image-title-description.component.css']
})
export class ImageTitleDescriptionComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() text!: string;

}