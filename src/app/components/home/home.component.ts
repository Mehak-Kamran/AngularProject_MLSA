
import { MatCard } from '@angular/material/card';


import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [MatCard],
  standalone: true,
  providers: [provideAnimations()],  // <-- Make sure this line is here
  animations: [
    trigger('zoomIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.1)' }), // Starts small and invisible
        animate('800ms ease-out', style({ opacity: 1, transform: 'scale(1)' })) // Zooms to normal size and becomes visible
      ])
    ]),
    trigger('bounceIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100px)' }), // Start off screen below
        animate('600ms cubic-bezier(.68,-0.55,.30,1.55)', style({ opacity: 1, transform: 'translateY(0)' })) // Bounce effect as it enters
      ])
    ])
    
    
    
    
    
  ]
})
export class HomeComponent {}
