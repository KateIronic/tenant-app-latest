import { Component } from '@angular/core';
import { ionSearch, ionArrowForwardOutline } from '@ng-icons/ionicons';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-searchbar',
  imports: [NgIcon],
  templateUrl: './searchbar.component.html', 
  viewProviders: [provideIcons({ionSearch, ionArrowForwardOutline })]
})
export class SearchbarComponent {

  openDropdown() {
  const target = document.getElementById('goal'); // Replace with your element's ID
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

  const overlay = document.getElementById('overlay');
  const dropdown = document.getElementById('dropdown');

  if (overlay && dropdown) {
    overlay.classList.remove('hidden');
    dropdown.classList.remove('hidden');
  }
}



  closeDropdown() {
    const overlay = document.getElementById('overlay');
    const dropdown = document.getElementById('dropdown');
    if (overlay && dropdown) {
      overlay.classList.add('hidden');
      dropdown.classList.add('hidden');
    }
  }

}
