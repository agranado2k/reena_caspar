import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients$;
  fields: any[] = [];

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.patients$ = this.patientService.getAll();
  }

  save(f) {
    this.patients$ = this.patientService.create(f.value);
    f.resetForm();
  }

  delete(patient) {
    this.patients$ = this.patientService.remove(patient.key);
  }

  update(patient) {
    this.toggleField(patient);
    this.patientService.update(patient);
  }

  toggleField(patient) {
    this.fields[patient.key] = !this.fields[patient.key];
  }
}
