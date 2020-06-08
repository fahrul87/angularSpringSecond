import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
   let resp= this.http.get("https://jsonplaceholder.typicode.com/Users");
   resp.subscribe((data)=>console.log(data));
  }

}
