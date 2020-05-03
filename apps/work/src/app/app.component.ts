import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  emails: {};

  constructor(private http: HttpClient){}

  ngOnInit(){
          
    this.http.get('http://localhost:3000/emails').subscribe((data) => this.emails=data);
}
}
