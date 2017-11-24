import { Patient } from './models/patient';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { Injectable } from '@angular/core';
import { DataService } from './services/data.service';

@Injectable()
export class PatientService extends DataService {

  constructor() {
    super('patients');
  }

  getAll() {
    return Observable.from([this.getAllObjects()]);
  }

  get(id) {
    return Observable.from([this.getObjectById(id)]) ;
  }

  create(patient) {
    return Observable.from([this.createObject(patient)]);
  }

  remove(key) {
    return Observable.from([this.removeObject(key)]);
  }

  update(patient) {
    return Observable.from([this.updateObject(patient)]);
  }
}
