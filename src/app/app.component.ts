import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { IntroComponent } from './components/intro/intro.component';

@Component({
  selector: 'app-root',
  imports: [UserComponent, IntroComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'tenant-app';
}
