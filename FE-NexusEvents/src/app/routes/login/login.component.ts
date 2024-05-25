import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NavigationExtras, Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { SessionService } from '../../services/session.service';
import { User } from '../../interfaces/user';
import { ProfileComponent } from '../profile/profile.component';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [RouterLink, MatButtonModule, FormsModule, ProfileComponent],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
    user: User = {
        email: '',
        password: '',
    };
    isValid: boolean = true;

    constructor(
        private router: Router,
        private userService: UserService,
        private sessionService: SessionService
    ) {}

    ngOnInit(): void {
        if (this.sessionService.isLogged()) {
            this.router.navigateByUrl('/profile');
        }
    }

    onSubmit(loginForm: NgForm): void {
        if (loginForm.invalid) {
            console.log(this.router);
            this.isValid = false;
            return;
        }

        this.userService.login(this.user).subscribe({
            next: (data: any) => {
                this.sessionService.setToken(data.token);
                this.sessionService.setProfile(data.id);
                this.router.navigateByUrl(
                    this.router.routerState.snapshot.root.queryParams[
                        'returnUrl'
                    ] ||
                        this.router.navigate([], {
                            queryParamsHandling: 'merge',
                        })
                );
            },
            error: (err: any) => {
                console.log(err);
            },
        });
    }
}
