import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Employee, AddEmployeeRequest } from './models';

const api = environment.apiUrl;

@Injectable()
export class EmployeesService {
  private employeesURI = '/users';
  private registerURI = '/register';

  constructor(private readonly http: HttpClient) {}

  getEmployees() {
    return this.http.get<Employee[]>(`${api}${this.employeesURI}`);
  }

  addEmployee(addEmployeeRequest: AddEmployeeRequest) {
    return this.http.post(`${api}${this.registerURI}`, addEmployeeRequest);
  }

  deleteEmployee(employeeId: number) {
    return this.http.delete(`${api}${this.employeesURI}/${employeeId}`);
  }
}
