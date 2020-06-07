import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {
  @Input() employee: Employee;
  @Output() deleteEmployee = new EventEmitter<Employee>();
}
