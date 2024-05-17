import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NgStyle, UpperCasePipe } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        HeaderComponent,
        UpperCasePipe,
        FooterComponent,
        NgStyle,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title: string = 'Nexus Events';

    constructor(private router: Router){}

    isLoginRegisterPage() : boolean {
        return this.router.url === '/login' || this.router.url === '/register';
    }
}
