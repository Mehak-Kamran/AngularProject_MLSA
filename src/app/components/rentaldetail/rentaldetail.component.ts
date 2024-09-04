import { Component,OnInit } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatCardHeader } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { MatCardSubtitle } from '@angular/material/card';
import { RentalserviceService } from '../../services/rentalservice.service';

@Component({
  selector: 'app-rentaldetail',
  standalone: true,
  imports: [MatCard,MatCardHeader,MatCardContent,MatCardTitle,MatCardSubtitle],
  templateUrl: './rentaldetail.component.html',
  styleUrl: './rentaldetail.component.css'
})
export class RentaldetailComponent implements OnInit {
  constructor( private detailservice:RentalserviceService){}
  detail:any
  ngOnInit(): void {
    this.Alldetails()
  }

  Alldetails(){
    this.detailservice.getallRental().subscribe({
      next:(res)=>{
        this.detail=res.reading_log_entries
        console.log(this.detail)
        console.log(res)
      }
   })

}



  
  }


