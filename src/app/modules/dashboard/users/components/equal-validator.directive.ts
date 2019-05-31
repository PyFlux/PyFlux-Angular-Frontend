import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

/** A hero's name can't match the hero's alter ego */
export const confirmPasswordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const confirm_password = control.get('confirm_password');
  return password && confirm_password && password.value !== confirm_password.value ? { 'confirmPassword': true } : null;
};

@Directive({
  selector: '[appconfirmPassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ConfirmPasswordValidatorDirective, multi: true }]
})
export class ConfirmPasswordValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors {
    return confirmPasswordValidator(control);
  }
}
