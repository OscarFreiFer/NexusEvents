import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        RouterOutlet,
        RouterLink,
        MatMenuModule,
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
    @Input() title: string = '';
    isLogged: boolean = false;

    constructor(
        private router: Router,
        private sessionService: SessionService
    ) {}

    ngOnInit(): void {
        this.isLogged = this.sessionService.isLogged();
    }

    handleClick(option: string) {
        if (option === 'logout') {
            this.sessionService.clearSession();
            this.isLogged = false;
        } else {
            this.router.navigate([option], {
                queryParams: { returnUrl: this.router.url },
            });
        }
    }
}
