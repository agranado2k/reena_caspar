[![Build Status](https://travis-ci.org/agranado2k/reena_caspar.svg?branch=master)](https://travis-ci.org/agranado2k/reena_caspar)

The main goal is to create a very small Web application with CRUD user pages for:
  •	Clinic
  •	Therapist
  •	Patient
Note: This task should take no longer than 6-8 hours at the most.
Prerequisites
  •	Angular 4
  •	Typescript
  •	RxJS
Task
1.	Create a git repository on github.com, please push changes with implementation iterations
2.	Implement AngularJS router architecture
3.	Add tabs/(menu categories) for each page
4.	Create simple markup for CRUD pages
5.	CRUD functionality should emulate real requests You can achieve that using data service(-s) and observable interface
6.	Create a possibility to link users in a following pattern:
      •	Therapists and Patients can be linked to a Clinic
      •	Patients can be linkend to a Therapists
      •	Patient can see to which Clinics and Therapiest they are linked to This should represent basic relation structure
7.	Relations between those records should be stored in memory (localStorage or indexDB).
