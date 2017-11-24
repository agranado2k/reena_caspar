import { TestBed, inject } from '@angular/core/testing';

import { PatientService } from './patient.service';

describe('PatientService', () => {
  let service;

  beforeEach(() => {
    service = new PatientService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get patient list', () => {
    let spy = spyOn(service, 'getAllObjects');

    service.getAll();

    expect(spy).toHaveBeenCalled();
  });

  it('should get patient by id', () => {
    let patientId = 'some_id';
    let spy = spyOn(service, 'getObjectById');

    service.get(patientId);

    expect(spy).toHaveBeenCalledWith(patientId);
  });

  it('should create a new patient', () => {
    let patient = {name: 'patient'};
    let spy = spyOn(service, 'createObject');

    service.create(patient);

    expect(spy).toHaveBeenCalledWith(patient);
  });

  it('should remove a patient', () => {
    let patient = {key: 1, name: 'patient'};
    let spy = spyOn(service, 'removeObject');

    service.remove(patient.key);

    expect(spy).toHaveBeenCalledWith(patient.key);
  });

  it('should update a patient', () => {
    let patient = {key: 1, name: 'patient'};
    let spy = spyOn(service, 'updateObject');

    service.update(patient.key);

    expect(spy).toHaveBeenCalledWith(patient.key);
  });
});
