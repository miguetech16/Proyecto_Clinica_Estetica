import { Component, Input } from '@angular/core';
import { Treatment } from '../interfaces/treatment.interface';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.css']
})
export class TreatmentComponent {
  @Input() treatment!: Treatment;
}
