import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Week } from '../../models/week';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ProjectsService } from '../../projects.service';
import { Project } from '../../models';

@Component({
  selector: 'app-week-update',
  templateUrl: './week-update.component.html',
  styleUrls: ['./week-update.component.scss'],
})
export class WeekUpdateComponent implements OnInit {
  @Input() updatingWeek: Week;
  @Input() updatingMonth: string;
  @Output() abortUpdate = new EventEmitter();
  updateWeekForm: FormGroup;
  projects: Project[];

  constructor(private formBuilder: FormBuilder, private projectsService: ProjectsService) {}

  ngOnInit() {
    console.log(this.updatingWeek);
    this.getProjects();
    this.initializeUpdateWeekForm();
  }

  updateWeek() {
    console.log(this.updateWeekForm.controls);
  }

  addProject(): void {
    const items = this.updateWeekForm.get('projects') as FormArray;
    items.push(this.createProjectFormItem());
  }

  private initializeUpdateWeekForm() {
    this.updateWeekForm = this.formBuilder.group({
      projects: this.formBuilder.array([this.createProjectFormItem()]),
    });
  }

  private createProjectFormItem(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      workedHours: [null, Validators.required],
    });
  }

  private getProjects() {
    this.projectsService.getProjects().subscribe((res) => {
      this.projects = res;
    });
  }
}
