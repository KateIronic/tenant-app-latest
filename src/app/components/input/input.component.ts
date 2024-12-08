import {
  Component,
  Input,
  forwardRef
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() id!: string; // Input ID
  @Input() label!: string; // Input label
  @Input() type: string = 'text'; // Default input type
  @Input() classes: string = ''; // Additional CSS classes

  value: string = '';
  disabled: boolean = false;

  // Callbacks for ControlValueAccessor
  onChange = (value: string) => {};
  onTouched = () => {};

  // Writes a new value from the parent
  writeValue(value: string): void {
    this.value = value;
  }

  // Registers the function to call when the input value changes
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  // Registers the function to call when the input is touched
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Enables or disables the input
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // Handles input change
  handleChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
    this.onTouched();
  }
}
