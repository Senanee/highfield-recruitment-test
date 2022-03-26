import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { TopColoursDTO } from '../../user/user.model';
import { UsersService } from '../../user/users.service';

@Component({
  selector: 'app-index-colour',
  templateUrl: './index-colour.component.html',
  styleUrls: ['./index-colour.component.css']
})
export class IndexColourComponent implements OnInit {
  constructor(private usersService: UsersService) { }
  colours: TopColoursDTO[] = [];
  columnsToDisplay = ['colour', 'count'];
  totalAmountOfRecords;
  currentPage = 1;
  pageSize = 5;
  

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.usersService.getAll(this.currentPage, this.pageSize).subscribe((response: HttpResponse<TopColoursDTO[]>) => {
      this.colours = response.body;
      this.totalAmountOfRecords = response.headers.get("totalAmountOfRecords");
    });
  }
  
  updatePagination(event: PageEvent){
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadData();
  }
}
