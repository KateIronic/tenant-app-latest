import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ad-card',
  imports: [CommonModule],
  templateUrl: './ad-card.component.html',
  styles: ``
})
export class AdCardComponent {
<<<<<<< HEAD
  @Input() card!: { name: string; durations: string; image: string; };
=======
  @Input()
  card!: { name: string; durations: string; image: string; };
>>>>>>> 891f3b3f22b06876b3d4c2b92d393eec2268999b

}
