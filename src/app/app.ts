// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   template: `
//     <main class="portfolio-container">
//       <router-outlet></router-outlet>
//     </main>
//   `,
//   styles: [`
//     .portfolio-container {
//       position: relative;
//       z-index: 1;
//       min-height: 100vh;
//     }
//   `]
// })
// export class App {
//   protected readonly title = signal('aryan-portfolio');
// }


import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SmoothScroll } from './core/services/smooth-scroll';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit, OnDestroy {
  constructor(private smoothScroll: SmoothScroll) {}

  ngOnInit(): void {
    this.smoothScroll.init();
  }

  ngOnDestroy(): void {
    this.smoothScroll.destroy();
  }
}