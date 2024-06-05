import { Component, Input, OnInit, ViewChild, ViewRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { DrawerService } from '../../services/drawer.service';
import { PanelService } from '../../services/panel.service';

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
        MatSidenavModule,
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
    @Input() title: string = '';
    isLogged: boolean = false;

    constructor(
        private router: Router,
        private sessionService: SessionService,
        private drawerService: DrawerService,
        private panelService: PanelService
    ) {}

    ngOnInit(): void {
        this.isLogged = this.sessionService.isLogged();
    }

    onHandleDrawer() {
        this.drawerService.toggleDrawer();
    }

    handleClick(option: string) {
        if (option === 'logout') {
            this.sessionService.clearSession();
            this.isLogged = false;
            if (this.router.url !== '/profile') {
                this.panelService.togglePanel();
            } else {
                console.log(this.router.url);
                this.router.navigate(['/login'], {
                    queryParams: { returnUrl: this.router.url },
                });
            }
        } else {
            this.router.navigate([option], {
                queryParams: { returnUrl: this.router.url },
            });
        }
    }
}
