import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursor-glow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="cursor-glow-spotlight"
      [style.left.px]="mouseX"
      [style.top.px]="mouseY">
    </div>
  `,
  styles: [`
    .cursor-glow-spotlight {
      position: fixed;
      width: 480px;
      height: 480px;
      margin-left: -240px;
      margin-top: -240px;
      border-radius: 50%;
      background: radial-gradient(
        circle,
        rgba(212, 255, 63, 0.045) 0%,
        rgba(212, 255, 63, 0.015) 35%,
        transparent 70%
      );
      pointer-events: none;
      z-index: 1;
      transform: translate3d(0, 0, 0);
      transition: transform 0.15s ease-out;
    }

    [data-theme="light"] .cursor-glow-spotlight {
      background: radial-gradient(
        circle,
        rgba(0, 0, 0, 0.035) 0%,
        transparent 65%
      );
    }

    @media (max-width: 768px) {
      .cursor-glow-spotlight {
        display: none;
      }
    }
  `]
})
export class CursorGlow implements OnInit {
  mouseX = -500;
  mouseY = -500;

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  }

  ngOnInit(): void {}
}