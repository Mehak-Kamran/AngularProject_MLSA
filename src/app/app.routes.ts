import { Routes } from '@angular/router';
import { ExploreComponent } from './components/explore/explore.component';
import { HomeComponent} from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
export const routes: Routes = [
        
  
  { path: 'home', component:HomeComponent},
  { path: 'explore', component:ExploreComponent},
  { path: 'about', component:AboutComponent},
  
  
  
];
