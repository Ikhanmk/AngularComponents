import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  phone = 12345;
  update = {}

  constructor() { }

  ngOnInit(): void {
  }

  updatedUsers(event: any){
    this.update = event
    
    
  }

}
