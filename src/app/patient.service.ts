import { Patient } from './models/patient';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { Injectable } from '@angular/core';

@Injectable()
export class PatientService {

  getAll() {
    return Observable.from([this.getAllObjects()]);
  }

  get(id) {
    return Observable.from([this.getObjectById(id)]) ;
  }

  create(patient) {
    return Observable.from([this.createObject(patient)]);
  }

  createObject(object) {
    let newId = (+localStorage.getItem('patients_id') || 0) + 1;
    object.key = newId;

    let objects = this.getAllObjects();
    objects.push(object);

    localStorage.setItem('patients', JSON.stringify(objects));
    localStorage.setItem('patients_id', newId.toString());
    return this.getAllObjects();
  }

  getObjectById(key) {
    let patients: Patient[] = this.getAllObjects();
    for (let pId in patients) {
      let patient = patients[pId];
      if (patient.key === key) return patient;
    }
    return null;
  }

  getAllObjects() {
    return JSON.parse(localStorage.getItem('patients')) || [];
  }
}
