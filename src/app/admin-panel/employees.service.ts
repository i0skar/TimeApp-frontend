import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Employee, AddEmployeeRequest } from './models';

const api = environment.apiUrl;

@Injectable()
export class EmployeesService {
  private employeesURI = '/user';
  private registerURI = '/register';
  private options = {headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Im9za2FyLmJydWRub3dza2lAZ21haWwuY29tIiwicm9sZSI6IkFkbWluIiwibmJmIjoxNTkxODIzNzE5LCJleHAiOjE1OTI0Mjg1MTksImlhdCI6MTU5MTgyMzcxOX0.DGLfP55AjHAkaVhABT6JlJRx3b3G3r0fNyNdjkrdCuI'}};
  constructor(private readonly http: HttpClient) {}

  getEmployees() {
    return this.http.get<Employee[]>(`${api}${this.employeesURI}`, this.options);
  }

  addEmployee(addEmployeeRequest: AddEmployeeRequest) {
    return this.http.post(`${api}${this.employeesURI}`, addEmployeeRequest, this.options);
  }

  deactivateEmployee(employeeId: number, activeStatus: boolean) {
    return this.http.patch(`${api}${this.employeesURI}/deactivateUser?userId=${employeeId}&activeStatus=${activeStatus}`, activeStatus, {...this.options, responseType: 'text'});
  }
}
