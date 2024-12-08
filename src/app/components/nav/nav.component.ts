import { Component } from '@angular/core';
import { GoalComponent } from '../goal/goal.component';
import { UserComponent } from "../../user/user.component";

@Component({
  selector: 'app-nav',
  imports: [GoalComponent, UserComponent],
  templateUrl: './nav.component.html',
  styles: ``
})
export class NavComponent {


}
