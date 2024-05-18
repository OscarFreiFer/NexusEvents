import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { passwordMatchValidator } from '../../validators/custom-validators';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { error } from 'console';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [
      ReactiveFormsModule, 
      NgClass, 
      RouterLink,
    ],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css',
})
export class RegisterComponent {
    registerForm: FormGroup;
    isInvalid: boolean = false;


    constructor(private myform: FormBuilder, private userService: UserService, private router: Router) {
        this.registerForm = this.myform.group(
            {
                name: ['', Validators.required],
                email: ['', [Validators.required, Validators.email]],
                passwd: ['', [Validators.required, Validators.minLength(6)]],
                repeatPasswd: ['', Validators.required],
            },
            { validators: passwordMatchValidator('passwd', 'repeatPasswd') }
        );
    }

    hasErrors(controlName: string, errorType: string) {
        return (
            this.registerForm.get(controlName)?.hasError(errorType) &&
            this.registerForm.get(controlName)?.touched
        );
    }

    enviar() {
        
        if (this.registerForm.invalid) {
            this.isInvalid = true;
        }else{
          const user: User = {
            name: this.registerForm.value?.name,
            password: this.registerForm.value?.passwd,
            email: this.registerForm.value?.email,
          }
          
          this.userService.register(user).subscribe(
            (response) => this.router.navigate(['']),
            (error) => alert("El correo introducido ya existe.")
          );
        }
    }
}
