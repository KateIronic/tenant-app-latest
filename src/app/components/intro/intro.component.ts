import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { UserComponent } from "../../user/user.component";

@Component({
  selector: 'app-intro',
  imports: [NavComponent, UserComponent],
  templateUrl: './intro.component.html',
  styles: ``
})
export class IntroComponent {

}
