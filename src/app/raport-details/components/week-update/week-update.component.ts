import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Week } from '../../models/week';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
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
  @Input() isEditProjectMode: boolean;
  @Output() abortUpdate = new EventEmitter();
  updateWeekForm: FormGroup;
  projects: Project[];
  selected;

  hours = new FormControl(null, [Validators.min(1), Validators.max(60)]);

  constructor(private formBuilder: FormBuilder, private projectsService: ProjectsService) {}

  ngOnInit() {
    // console.log(this.updatingWeek.projects);
    this.getProjects();
    // this.initializeUpdateWeekForm();
    console.log(this.isEditProjectMode);
    console.log(this.updatingWeek);
    if (this.isEditProjectMode) {
      this.selected = this.updatingWeek.name;
      this.hours.setValue(this.updatingWeek.workedHours);
    }
  }

  updateWeek() {
    // console.log(this.updateWeekForm.controls);
    console.log(this.selected, this.hours);
    if (this.isEditProjectMode) {
      if (+this.hours.value > 0) {
        this.projectsService.patchProject(this.updatingWeek.id,
          {name: this.selected, workedHours: +this.hours.value, weekId: this.updatingWeek.id})
        .subscribe(() => window.location.reload(), () =>  {
          window.location.reload();
        });
      }
    } else {
      if (+this.hours.value > 0) {
        this.projectsService.addProject({
          name: this.selected,
          workedHours: +this.hours.value,
          weekId: this.updatingWeek.id
        }).subscribe(() => window.location.reload(), () =>  {
          window.location.reload();
        });
      }
    }
    
    // this.abortUpdate.emit();
  }

  // addProject(): void {
  //   const items = this.updateWeekForm.get('projects') as FormArray;
  //   items.push(this.createProjectFormItem());
  // }

  // private initializeUpdateWeekForm() {
  //   this.updateWeekForm = this.formBuilder.group({
  //     projects: this.formBuilder.array([this.createProjectFormItem()]),
  //   });
  //   this.patchWeekFormValues();
  // }

  // private createProjectFormItem(): FormGroup {
  //   return this.formBuilder.group({
  //     name: [null, Validators.required],
  //     workedHours: [null, Validators.required],
  //   });
  // }

  // private updateProjectFormItem(item): FormGroup {
  //   return this.formBuilder.group({
  //     name: [item.name, Validators.required],
  //     workedHours: [item.workedHours, Validators.required],
  //   });
  // }

  private getProjects() {
    this.projectsService.getProjects().subscribe((res) => {
      this.projects = res;
      // this.initFormArray();
      // console.log(this.updateWeekForm.get('projects').value[1]);
    });
  }

  private patchWeekFormValues() {
    // this.updateWeekForm.get('projects').patchValue(
    //   {
    //     name: this.updatingWeek.projects[0].name,
    //     workedHours: this.updatingWeek.projects[0].workedHours
    //   }
    // );
    // console.log(this.updateWeekForm.get('projects'));
    // const items = this.updateWeekForm.get('projects') as FormArray;
    // console.log(items.value);
    // items[0].patchValue({
    //   name: ['Sztuczna Inteligencja', Validators.required],
    //   workedHours: [20, Validators.required],
    // });
  }
  // initFormArray() {
  //   const formArray = this.updateWeekForm.get('projects') as FormArray;
  //   this.projects.map(item => {
  //     console.log(item);
  //     formArray.push(this.updateProjectFormItem(item));
  //   });
  //   this.updateWeekForm.setControl('projects', formArray);
  // }
}
