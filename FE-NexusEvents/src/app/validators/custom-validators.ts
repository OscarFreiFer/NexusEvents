import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export const passwordMatchValidator = (firstPassword: string, secondPassword: string): ValidatorFn => { 
    return (control: AbstractControl): ValidationErrors | null => {
        const password = control.get(firstPassword);
        const repeatPassword = control.get(secondPassword);
        
        if (password && repeatPassword && password.value !== repeatPassword.value) {
            return { passwordMismatch: true };
        }
        return null;
    };
}
