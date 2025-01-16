import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    main {
      padding: 2em;
    }
  `]
})
export class AppComponent {
  onNavigate(route: string) {
    if (route === 'home') {
      window.location.href = '/';
    } else if (route === 'new-link') {
      window.location.href = '/new';
    }
  }
}