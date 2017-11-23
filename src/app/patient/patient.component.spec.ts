import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { PatientComponent } from './patient.component';
import { PatientService } from '../patient.service';

describe('PatientComponent', () => {
  let component: PatientComponent;
  let fixture: ComponentFixture<PatientComponent>;
  let service: PatientService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ PatientComponent ],
      providers: [ PatientService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientComponent);
    component = fixture.componentInstance;
    service = TestBed.get(PatientService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load patients', () => {
    let patient = {key: 1, name: 'Patient'};
    spyOn(service, 'getAll').and.returnValues(Observable.from([[patient, patient, patient]]));

    expect(component.patients$).not.toBeNull();
  });

  it('should save patient when click on button save', () => {
    let spy = spyOn(service, 'create');
    let de = fixture.debugElement.query(By.css('form'));

    de.triggerEventHandler('submit', null);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('should delete patient when click on button delete', () => {
    let patient = {key: 1, name: 'Patient'};
    let spy = spyOn(service, 'remove');
    let de = fixture.debugElement.query(By.css('button.btn-danger'));

    de.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('should delete patient when click on button delete', () => {
    let patient = {key: 1, name: 'Patient'};
    let spy = spyOn(service, 'update');

    component.update(patient);

    expect(spy).toHaveBeenCalledWith(patient);
  });

  it('should include the property isForEdit when toggel field', () => {
    let patient = {key: 1, name: 'Patient'};

    component.toggleField(patient);

    expect(component.fields[patient.key]).toBeTruthy();
  });

  it('should remove the property isForEdit when toggle field', () => {
    let patient = {key: 1, name: 'Patient', isForKey: true};
    component.fields[patient.key] = true;

    component.toggleField(patient);

    expect(component.fields[patient.key]).toBeFalsy();
  });
});
