import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { UserComponent } from "../../user/user.component";
import { GoalComponent } from '../goal/goal.component';
import { StartLearningComponent } from '../start-learning/start-learning.component';
<<<<<<< HEAD
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-intro',
  imports: [NavComponent, UserComponent, GoalComponent, StartLearningComponent, FooterComponent],
=======

@Component({
  selector: 'app-intro',
  imports: [NavComponent, UserComponent, GoalComponent, StartLearningComponent],
>>>>>>> 891f3b3f22b06876b3d4c2b92d393eec2268999b
  templateUrl: './intro.component.html',
  styles: ``
})
export class IntroComponent {

}
