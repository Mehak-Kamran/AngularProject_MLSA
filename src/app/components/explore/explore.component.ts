import { RentalserviceService } from './../../services/rentalservice.service';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,RouterModule],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})
export class ExploreComponent  implements OnInit{
   constructor(private  rentalservice:RentalserviceService){}
  rent:any
   ngOnInit(): void {
     this.Allrents()
   }

   Allrents(){
    this.rentalservice.getallRental().subscribe({
      next:(res)=>{
        this.rent=res.reading_log_entries
        console.log(this.rent)
      }
   })
   }

}
