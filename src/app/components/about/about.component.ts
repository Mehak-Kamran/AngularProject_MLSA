import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatGridTile } from '@angular/material/grid-list';
import { trigger, style, animate, transition } from '@angular/animations';
import { provideAnimations } from '@angular/platform-browser/animations';



@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ MatCard,RouterModule,MatButtonModule,MatGridListModule,MatGridTile,MatIconModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
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
    ]),

    trigger('rotateIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'rotate(-90deg)' }), // Start rotated and invisible
        animate('1000ms ease-out', style({ opacity: 1, transform: 'rotate(0deg)' })) // Rotate into the correct position
      ])
    ]),

    trigger('fadeInScale', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }), // Start small and transparent
        animate('1500ms ease-out', style({ opacity: 1, transform: 'scale(1)' })) // Full size and visible
      ])
    ])
    
    
  ] 
    

})
export class AboutComponent {

}
