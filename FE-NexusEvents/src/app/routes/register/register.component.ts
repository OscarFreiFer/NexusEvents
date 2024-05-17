import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../validators/custom-validators';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [
      ReactiveFormsModule, 
      NgClass,
    ],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css',
})
export class RegisterComponent {

  registerForm: FormGroup

  constructor(private myform: FormBuilder, ){ 
    this.registerForm = this.myform.group({ 
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      passwd: ['', [Validators.required, Validators.minLength(6)]],
      repeatPasswd: ['', Validators.required]
    }, { validators: passwordMatchValidator('passwd', 'repeatPasswd')})
  }

  hasErrors(controlName: string, errorType: string){
    return this.registerForm.get(controlName)?.hasError(errorType) && this.registerForm.get(controlName)?.touched;
  }

  enviar(){
    console.log(this.registerForm)
  }
}
