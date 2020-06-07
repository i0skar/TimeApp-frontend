import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<AddEmployeeComponent>) {}

  ngOnInit() {
    this.initializeAddEmployeeForm();
  }

  addEmployee() {
    if (this.addEmployeeForm.invalid) {
      return;
    }
    this.dialogRef.close(this.addEmployeeForm.value);
  }

  private initializeAddEmployeeForm() {
    this.addEmployeeForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      name: [null, Validators.required],
      surname: [null, Validators.required],
      status: [null, Validators.required],
    });
  }
}
