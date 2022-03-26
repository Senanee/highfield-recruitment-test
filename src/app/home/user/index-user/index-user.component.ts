import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { userDTO } from '../user.model';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-index-user',
  templateUrl: './index-user.component.html',
  styleUrls: ['./index-user.component.css']
})
export class IndexUserComponent implements OnInit {
  constructor(private usersService: UsersService) { }

  users: userDTO[]= [];
  columnsToDisplay = ['firstName', 'dob', 'favouriteColour', 'originalAge', 'agePlusTwenty'];
  totalAmountOfRecords;
  currentPage = 1;
  pageSize = 5;
  

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.usersService.getAll(this.currentPage, this.pageSize).subscribe((response: HttpResponse<userDTO[]>) => {
      this.users = response.body;
      this.totalAmountOfRecords = response.headers.get("totalAmountOfRecords");
    });
  }

  updatePagination(event: PageEvent){
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadData();
  }


}
