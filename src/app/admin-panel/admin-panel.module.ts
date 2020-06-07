import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { EmployeeComponent } from './components/employee/employee.component';
import { SharedModule } from '../shared/shared.module';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeesService } from './employees.service';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';

@NgModule({
  declarations: [AdminPanelComponent, EmployeeComponent, AddEmployeeComponent, DeleteEmployeeComponent],
  imports: [CommonModule, AdminPanelRoutingModule, SharedModule],
  providers: [EmployeesService],
  entryComponents: [AddEmployeeComponent, DeleteEmployeeComponent],
})
export class AdminPanelModule {}
