import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
users:any[];
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data =>{
this.users=data
console.log(this.users);

    })
    this.getUsers();
  }

  getUsers(){
    this.data.getUsers()
      .subscribe(
        data => {
           this.users = data;

   console.log(this.users);
         
        },
        err => {
          console.log('all inquiries err', err);
        }
      )
 }

}
