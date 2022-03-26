import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TopColoursDTO, userDTO,ResponseDTO } from './user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  
  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL

  /* getAll(): Observable<userDTO[]> {
    return this.http.get<userDTO[]>(this.apiURL);
  } */
  getAll(page: number, recordsPerPage: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('recordsPerPage', recordsPerPage.toString());
    return this.http.get<userDTO[]>(this.apiURL, {observe: 'response', params});
  }
  getColours(page: number, recordsPerPage: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('recordsPerPage', recordsPerPage.toString());
    return this.http.get<TopColoursDTO[]>(this.apiURL, {observe: 'response', params});
  }
  
  getResponse(): Observable<ResponseDTO[]>{
    return this.http.get<ResponseDTO[]>(`${this.apiURL}/getUsers`);
  }
}
