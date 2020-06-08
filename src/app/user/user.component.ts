import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // displaying data in html
  Users :any;

  // materi consume rest api
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    // materi consume rest api
   let resp= this.http.get("https://jsonplaceholder.typicode.com/Users");
  //  resp.subscribe((data)=>console.log(data));
  // displayng data in html
  resp.subscribe((data)=>this.Users=data);
  }

}
