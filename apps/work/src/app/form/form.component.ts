import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator } from '../shared/email.validator';


@Component({
    selector: 'nx-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
  })
export class FormComponent implements OnInit  {
  myFirstReactiveForm: FormGroup;
 
  constructor(private fb: FormBuilder, 
              private EmailValidator: EmailValidator){}
  
  ngOnInit(){  
   this.initForm();
  }
 
  initForm(){
   this.myFirstReactiveForm = this.fb.group({
    name: [
      'name',
      [
        Validators.required,
        Validators.pattern(/[А-я]/)
      ],
    ],
    email: [
      '',
      [
        Validators.required, 
        Validators.email
      ],
      [this.EmailValidator.validate.bind(this.EmailValidator)]
    ]
   });
  }


  isControlInvalid(controlName: string): boolean {
    const control = this.myFirstReactiveForm.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

  onSubmit() {
    const controls = this.myFirstReactiveForm.controls;
    
     /** Проверяем форму на валидность */ 
     if (this.myFirstReactiveForm.invalid) {
      /** Если форма не валидна, то помечаем все контролы как touched*/
      Object.keys(controls)
       .forEach(controlName => controls[controlName].markAsTouched());
       
       /** Прерываем выполнение метода*/
       return;
      }
    
     /** TODO: Обработка данных формы */
     console.log(this.myFirstReactiveForm.value);
    }
 }
 