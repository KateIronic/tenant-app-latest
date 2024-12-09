import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { UserComponent } from "../../user/user.component";
import { GoalComponent } from '../goal/goal.component';
import { StartLearningComponent } from '../start-learning/start-learning.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-intro',
  imports: [NavComponent, UserComponent, GoalComponent, StartLearningComponent, FooterComponent],
  templateUrl: './intro.component.html',
  styles: ``
})
export class IntroComponent {

}
