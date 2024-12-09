import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ad-card',
  imports: [CommonModule],
  templateUrl: './ad-card.component.html',
  styles: ``
})
export class AdCardComponent {
  @Input()
  card!: { name: string; durations: string; image: string; };

}
