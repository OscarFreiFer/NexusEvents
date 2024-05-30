import { Component, OnInit, ViewChild } from '@angular/core';
import { EventType, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NgStyle, UpperCasePipe } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { DrawerService } from './services/drawer.service';
import { MatIconModule } from '@angular/material/icon';
import { EventsType, eventsType } from './interfaces/eventsType';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        HeaderComponent,
        UpperCasePipe,
        FooterComponent,
        NgStyle,
        MatSidenavModule,
        MatIconModule,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
    title: string = 'Nexus Events';
    eventsType: EventsType[] = eventsType;

    @ViewChild('drawer') drawer!: MatDrawer;

    constructor(private router: Router, private drawerService: DrawerService) {}

    ngOnInit(): void {
        this.drawerService.toggleDrawer$.subscribe(() => {
            this.drawer.toggle();
        });
    }

    isLoginRegisterPage(): boolean {
        const regexLogin = /\/login/;
        const regexRegister = /\/register/;
        return (
            regexLogin.test(this.router.url) ||
            regexRegister.test(this.router.url)
        );
    }

    onClick(ruta: string): void {
        this.router.navigateByUrl(ruta);
    }
}
