import { Injectable, NgZone } from '@angular/core';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Injectable({
  providedIn: 'root',
})
export class SmoothScroll {
  private lenis: Lenis | null = null;

  constructor(private ngZone: NgZone) {}

  init(): void {
    this.ngZone.runOutsideAngular(() => {
      this.lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
      });

      this.lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        this.lenis?.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    });
  }

  scrollTo(target: string | HTMLElement, offset: number = -60): void {
    if (this.lenis) {
      this.lenis.scrollTo(target, { offset });
    } else {
      const el = typeof target === 'string' ? document.querySelector(target) : target;
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  destroy(): void {
    this.lenis?.destroy();
  }
}