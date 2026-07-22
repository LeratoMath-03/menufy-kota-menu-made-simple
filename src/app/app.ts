import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {

  private router = inject(Router);
  private currentUrl = signal(this.router.url);
  private hiddenNavRoutes = ['/login', '/signup', '/owner', '/kitchen'];

  constructor() 
  {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(event => {
      this.currentUrl.set((event as NavigationEnd).urlAfterRedirects);
    });
  }

  showBottomNav(): boolean 
  {
    return !this.hiddenNavRoutes.some(route => this.currentUrl().startsWith(route));
  }
}
