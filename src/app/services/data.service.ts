import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  constructor(private domainName) { }

  createObject(object) {
    let newId = (+localStorage.getItem(`${this.domainName}_id`) || 0) + 1;
    object.key = newId;

    let objects = this.getAllObjects();
    objects.push(object);

    localStorage.setItem(this.domainName, JSON.stringify(objects));
    localStorage.setItem(`${this.domainName}_id`, newId.toString());
    return this.getAllObjects();
  }

  removeObject(key) {
    let objects: any[] = this.getAllObjects();
    let index = objects.findIndex(obj => obj.key === key);
    objects.splice(index, 1);

    localStorage.setItem(this.domainName, JSON.stringify(objects));
    return objects;
  }

  updateObject(object) {
    let objects: any[] = this.getAllObjects();
    let index = objects.findIndex(obj => obj.key === object.key);
    objects[index] = object;

    localStorage.setItem(this.domainName, JSON.stringify(objects));
    return objects;
  }

  getObjectById(key) {
    let patients: any[] = this.getAllObjects();
    for (let pId in patients) {
      let patient = patients[pId];
      if (patient.key === key) return patient;
    }
    return null;
  }

  getAllObjects() {
    return JSON.parse(localStorage.getItem(this.domainName)) || [];
  }
}
