import {HttpClient} from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';




@Injectable({providedIn: 'root'})
export class HttpService {

  em = ["mor@i.ua"]
  
  constructor(private http: HttpClient){ }

  isEmailTaken(email: string): Observable <boolean> {
    this.http.get('http://localhost:3000/emails').subscribe( data => {
      for (let el  in data){
        this.em.push(data[el])
      }
    });
    let isTaken = this.em.includes(email);
    return of(isTaken)
  }
    
}
