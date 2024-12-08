import {Component, inject} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {FormControl, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';
// import {FormArray} from '@angular/forms';
import { InputComponent } from '../../components/input/input.component';
import { Router } from '@angular/router';
import axios from 'axios';


@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule, InputComponent],
  templateUrl: './signup.component.html',
  styles: ``,
  standalone:true
})
export class SignupComponent {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

  // Form group definition
  profileForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  });
  getFormControl(controlName: string): FormControl {
    return this.profileForm.get(controlName) as FormControl;
  }

  // Variable to toggle between login and register
  variant: string = 'login';

  // Toggle between login and register
  toggleVariant() {
    this.variant = this.variant === 'login' ? 'register' : 'login';
    this.resetForm(); // Reset the form whenever switching variants
  }

  // Reset form for the relevant variant
  resetForm() {
    if (this.variant === 'login') {
      this.profileForm.reset();
      this.profileForm.controls['confirmPassword'].clearValidators();
    } else {
      this.profileForm.controls['confirmPassword'].setValidators([Validators.required]);
    }
  }

  // Handle form submission
  onSubmit() {
    // if (this.profileForm.invalid) return;

    const { email, password, name } = this.profileForm.value;
    console.log([email, password, name]);

    // if (this.variant === 'login') {
      // Handle login submission
      // await this.login(email, password);
    //   alert([email, password]);
    // } else {
      // Handle register submission
    //   alert(name);
      // await this.register(email, name, password);

    // }
  }

  // Login method
  async login(email: string, password: string) {
    try {
      // Your login logic here, e.g., using an authentication service
      console.log('Logging in with:', email, password);
      this.router.navigate(['/profile']);
    } catch (error) {
      console.error(error);
    }
  }

  // Register method
  async register(email: string, name: string, password: string) {
    try {
      // Send a POST request to register
      await axios.post('/api/register', { email, name, password });
      // After successful registration, log the user in
      await this.login(email, password);
    } catch (error) {
      console.error(error);
    }
  }
}
