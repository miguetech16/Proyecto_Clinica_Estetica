import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-with-image',
  templateUrl: './title-with-image.component.html',
  styleUrls: ['./title-with-image.component.css']
})
export class TitleWithImageComponent {

  @Input() title: string = "";

}
