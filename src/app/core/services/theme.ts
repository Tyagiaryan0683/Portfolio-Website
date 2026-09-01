import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkMode = signal<boolean>(true);

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.setTheme(savedTheme === 'dark');
    } else {
      this.setTheme(true); // Default dark
    }
  }

  toggleTheme(): void {
    this.setTheme(!this.isDarkMode());
  }

  private setTheme(isDark: boolean): void {
    this.isDarkMode.set(isDark);
    const theme = isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
}