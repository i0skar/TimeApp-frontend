import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { MatDialog } from '@angular/material/dialog';
import { EmployeesService } from './employees.service';
import { groupArrayByProperty } from '../utlis';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';
import { AddEmployeeRequest } from './models';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
})
export class AdminPanelComponent implements OnInit {
  employees: Employee[] = [];

  constructor(public dialog: MatDialog, private employeesService: EmployeesService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getEmployees();
  }

  addEmployee(addEmployeeForm: AddEmployeeRequest) {
    this.employeesService.addEmployee(addEmployeeForm).subscribe(
      () => this.getEmployees(),
      (err) => this.showErrorSnackbar()
    );
  }

  deactivateEmployee(id: number, isActivate: boolean) {
    this.employeesService.deactivateEmployee(id, !isActivate).subscribe(
      () => this.getEmployees(),
      (err) => this.showErrorSnackbar()
    );
  }

  openAddEmployeePopup() {
    const dialog = this.dialog.open(AddEmployeeComponent, { width: '400px', autoFocus: false });
    dialog.afterClosed().subscribe((res) => {
      if (res != null) {
        this.addEmployee(res);
      }
    });
  }

  openDeactivateEmployeePopup(employee: Employee) {
    const dialog = this.dialog.open(DeleteEmployeeComponent, {
      data: { employee },
      width: '370px',
      autoFocus: false,
    });
    dialog.afterClosed().subscribe((id) => {
      if (typeof id === 'number') {
        this.deactivateEmployee(id, employee.isActive);
      }
    });
  }

  private getEmployees() {
    this.employeesService.getEmployees().subscribe((res) => {
      this.employees = groupArrayByProperty(res, 'status');
    });
  }

  private showErrorSnackbar() {
    this.snackBar.open('Nie udało się', null, {
      duration: 500,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }
}
