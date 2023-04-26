import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-description-button',
  templateUrl: './image-description-button.component.html',
  styleUrls: ['./image-description-button.component.css']
})
export class ImageDescriptionButtonComponent {
@Input() image!: string;
@Input() description!: string;
@Input() route!: string[];
}
