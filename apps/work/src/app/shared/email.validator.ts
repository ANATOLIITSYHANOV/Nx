import { Directive, forwardRef, Injectable } from '@angular/core';
import {
  AsyncValidator,
  AbstractControl,
  NG_ASYNC_VALIDATORS,
  ValidationErrors
} from '@angular/forms';
import { catchError, map } from 'rxjs/operators';
import { HttpService } from '../shared/http.servise';
import { Observable, of } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class EmailValidator implements AsyncValidator{

  constructor(private HttpService: HttpService) {}

  validate(ctrl: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.HttpService.isEmailTaken(ctrl.value).pipe(
      map(isTaken => (isTaken ? { exist: true } : null)),
      catchError(() => of(null))
    );
  }
}

@Directive({
  selector: '[EmailValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => EmailValidator),
      multi: true
    }
  ]
})
export class EmailValidatorDirective {
  constructor(private validator: EmailValidator) {}

  validate(control: AbstractControl) {
    this.validator.validate(control);
  }
}
