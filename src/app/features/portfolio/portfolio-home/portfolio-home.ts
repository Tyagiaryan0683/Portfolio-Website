import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../navbar/navbar';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Skills } from '../skills/skills';
import { Projects } from '../projects/projects';
import { Experience } from '../experience/experience';
import { Architecture } from '../architecture/architecture';
import { Contact } from '../contact/contact';
import { Footer } from '../footer/footer';
import { CursorGlow } from '../../../shared/cursor-glow';

@Component({
  selector: 'app-portfolio-home',
  standalone: true,
  imports: [
    CommonModule,
    Navbar,
    Hero,
    About,
    Skills,
    Projects,
    Experience,
    Architecture,
    Contact,
    Footer,
    CursorGlow
  ],
  templateUrl: './portfolio-home.html',
  styleUrls: ['./portfolio-home.css']
})
export class PortfolioHome {}