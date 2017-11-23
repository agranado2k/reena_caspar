import { TestBed, inject } from '@angular/core/testing';

import { PatientService } from './patient.service';

describe('PatientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientService]
    });
  });

  it('should be created', inject([PatientService], (service: PatientService) => {
    expect(service).toBeTruthy();
  }));

  it('should get patient list',
    inject([PatientService], (service: PatientService) => {
    let spy = spyOn(service, 'getAllObjects');

    service.getAll();

    expect(spy).toHaveBeenCalled();
  }));

  it('should get patient by id',
    inject([PatientService], (service: PatientService) => {
    let patientId = 'some_id';
    let spy = spyOn(service, 'getObjectById');

    service.get(patientId);

    expect(spy).toHaveBeenCalledWith(patientId);
  }));

  it('should create a new patient',
    inject([PatientService], (service: PatientService) => {
    let patient = {name: 'patient'};
    let spy = spyOn(service, 'createObject');

    service.create(patient);

    expect(spy).toHaveBeenCalledWith(patient);
  }));

  it('should remove a patient',
    inject([PatientService], (service: PatientService) => {
    let patient = {key: 1, name: 'patient'};
    let spy = spyOn(service, 'removeObject');

    service.remove(patient.key);

    expect(spy).toHaveBeenCalledWith(patient.key);
  }));

  it('should update a patient',
    inject([PatientService], (service: PatientService) => {
    let patient = {key: 1, name: 'patient'};
    let spy = spyOn(service, 'updateObject');

    service.update(patient.key);

    expect(spy).toHaveBeenCalledWith(patient.key);
  }));

  it('should get all objects from localStorage',
    inject([PatientService], (service: PatientService) => {
    localStorage.setItem('patients', JSON.stringify([{key: 1}, {key: 2}, {key: 3}]));

    let objects: any[] = service.getAllObjects();

    expect(objects.length).toBe(3);
  }));

  it('should get empty list when there is no object in localStorage',
    inject([PatientService], (service: PatientService) => {
    localStorage.setItem('patients', null);

    let objects: any[] = service.getAllObjects();

    expect(objects.length).toBe(0);
  }));

  it('should get object from localStorage by id',
    inject([PatientService], (service: PatientService) => {
    localStorage.setItem('patients', JSON.stringify([{key: 1}, {key: 2}, {key: 3}]));
    let key = 2;

    let object = service.getObjectById(key);

    expect(object.key).toBe(key);
  }));

  it('should create a object to localStorage',
    inject([PatientService], (service: PatientService) => {
    let patient = {name: 'patient'};
    localStorage.setItem('patients', JSON.stringify([]));

    let result = service.createObject(patient);
    let object = service.getAllObjects()[0];

    expect(result.length).toBe(1);
    expect(object.key).not.toBeNull();
  }));

  it('should remove a object from localStorage',
    inject([PatientService], (service: PatientService) => {
    localStorage.setItem('patients', JSON.stringify([{key: 1}, {key: 2}, {key: 3}]));
    let patientKey = 2;

    let objects = service.removeObject(patientKey);

    expect(objects.length).toBe(2);
    expect(objects[0].key).toBe(1);
    expect(objects[1].key).toBe(3);
  }));

  it('should update a object from localStorage',
    inject([PatientService], (service: PatientService) => {
    localStorage.setItem('patients', JSON.stringify([{key: 1}, {key: 2}, {key: 3}]));
    let updatedPatient = {key: 2, name: 'patient'};

    let objects = service.updateObject(updatedPatient);

    expect(objects[1].name).toContain('patient');
  }));
});
