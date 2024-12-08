import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styles: ``
})
export class CourseCardComponent {
   @Input()
  course!: { name: string; description: string; image: string; };

}
