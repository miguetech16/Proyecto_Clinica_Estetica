import { Component, Input } from '@angular/core';
import { Treatment } from '../interfaces/treatment.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent {
  @Input() img!: string;
  @Input() name!: string;
  @Input() linkroute!: any;
}
