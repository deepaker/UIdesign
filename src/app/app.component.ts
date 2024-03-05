import { Component, Injectable, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import exp from 'constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [CommonModule, RouterOutlet,MatCardModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'UIdesign';

  UserDetails:Array<UserDetails>=[]
    constructor(private http:HttpClient ){
    
  }
  ngOnInit(): void {
    this.getUserDetails()
  }

  getUserDetails(){
     const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
          // Add any other headers if needed
        });
    this.http.get<CandidateUserDetails>("https://localhost:7175/api/Admin/GetPeople",{headers:headers}).subscribe((data)=>{
      if(data){
        this.UserDetails = data.User
      }
   })
  }

  // getPeople(): Observable<CandidateUserDetails> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     // Add any other headers if needed
  //   });

  //   return this.http.get<any>(this.baseUrl, { headers });
  // }
}
export interface CandidateUserDetails{
     User:UserDetails[]
}
export interface UserDetails{
  firstName: "",
    middleName: "",
    lastName: "",
    state: "",
    age: number,
    address: "",
    mobileNumber: ""
}
