import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalserviceService {

  constructor(private http: HttpClient) {}

  // Method to fetch the currently reading books data from the Open Library API
  getallRental(): Observable<any> {
    // Directly returning the response from the API without any transformation
    return this.http.get<any>("https://openlibrary.org/people/mekBot/books/currently-reading.json");
  }

   //for use detail page
   getkey(key: any): Observable<any> {
    return this.http.get<any>(`https://openlibrary.org/works/${key}.json`);  // Use backticks for template literals
  }
  


}
