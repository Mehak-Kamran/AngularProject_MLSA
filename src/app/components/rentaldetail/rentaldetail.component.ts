
import { Component,OnInit } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatCardHeader } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { MatCardSubtitle } from '@angular/material/card';
import { RentalserviceService } from '../../services/rentalservice.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-rentaldetail',
  standalone: true,
  imports: [MatCard,MatCardHeader,MatCardContent,MatCardTitle,MatCardSubtitle,CommonModule,NgIf],
  templateUrl: './rentaldetail.component.html',
  styleUrl: './rentaldetail.component.css'
})
export class RentaldetailComponent implements OnInit {
  resultkey:any
  key: string | null = '';
  constructor( private activateRoute:ActivatedRoute, private rentalservice:RentalserviceService){}
  
  ngOnInit(): void {
    // Access the dynamic key from the route
    let fullKey = this.activateRoute.snapshot.paramMap.get('key');
    if (fullKey) {
      // Remove '/works' from the key if it exists
      this.key = fullKey.replace('/works/', '');
      console.log('Sanitized key:', this.key);
    }
    this.GetKey();
    // Now you can use this key to fetch book details or do other operations
  }
  
  
  GetKey(){
    this.rentalservice.getkey(this.key).subscribe({
               next:(res:any)=>{
                this.resultkey=res;
                console.log(this.resultkey);

               }
    })
  }

 
   
  }






