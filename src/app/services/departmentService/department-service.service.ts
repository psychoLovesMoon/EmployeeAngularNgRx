import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Department } from 'src/app/models/department';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http : HttpClient) { }

  baseUrl = 'https://localhost:44320/api/department'

  getDepartments() {
    return this.http.get<Department[]>(this.baseUrl)
  }
}
