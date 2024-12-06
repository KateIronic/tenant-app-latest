import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, ReactiveFormsModule, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styles: ``,
  standalone:true
})
export class SignupComponent {

  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}

