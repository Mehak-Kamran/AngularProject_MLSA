import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatGridTile } from '@angular/material/grid-list';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ MatCard,RouterModule,MatButtonModule,MatGridListModule,MatGridTile,MatIconModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
