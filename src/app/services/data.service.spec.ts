import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service;
  beforeEach(() => {
    service = new DataService('objects');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all objects from localStorage', () => {
    localStorage.setItem('objects', JSON.stringify([{key: 1}, {key: 2}, {key: 3}]));

    let objects: any[] = service.getAllObjects();

    expect(objects.length).toBe(3);
  });

  it('should get empty list when there is no object in localStorage', () => {
    localStorage.setItem('objects', null);

    let objects: any[] = service.getAllObjects();

    expect(objects.length).toBe(0);
  });

  it('should get object from localStorage by id', () => {
    localStorage.setItem('objects', JSON.stringify([{key: 1}, {key: 2}, {key: 3}]));
    let key = 2;

    let object = service.getObjectById(key);

    expect(object.key).toBe(key);
  });

  it('should create a object to localStorage', () => {
    let patient = {name: 'patient'};
    localStorage.setItem('objects', JSON.stringify([]));

    let result = service.createObject(patient);
    let object = service.getAllObjects()[0];

    expect(result.length).toBe(1);
    expect(object.key).not.toBeNull();
  });

  it('should remove a object from localStorage', () => {
    localStorage.setItem('objects', JSON.stringify([{key: 1}, {key: 2}, {key: 3}]));
    let patientKey = 2;

    let objects = service.removeObject(patientKey);

    expect(objects.length).toBe(2);
    expect(objects[0].key).toBe(1);
    expect(objects[1].key).toBe(3);
  });

  it('should update a object from localStorage', () => {
    localStorage.setItem('objects', JSON.stringify([{key: 1}, {key: 2}, {key: 3}]));
    let updatedPatient = {key: 2, name: 'patient'};

    let objects = service.updateObject(updatedPatient);

    expect(objects[1].name).toContain('patient');
  });
});
