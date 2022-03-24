import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.css']
})
export class FilterUsersComponent implements OnInit {

  @Input() name!: string;

  @Input() phone!: number;

  @Output() updatedList = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  updateUser():void {

    const userObj = {userId:10, userName: "Imran Khan MK"}
    this.updatedList.emit(userObj);
  }

}
