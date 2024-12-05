import { AbstractControl, ValidatorFn } from '@angular/forms';

export class FormUtils {

  public static updateFormControlValidation(formControl: AbstractControl<any, any> | null,
                                            validators: ValidatorFn | ValidatorFn[] | null): void {
    formControl?.setValidators(validators);
    formControl?.updateValueAndValidity();
  }

}
