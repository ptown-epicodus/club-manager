# ClubManager

#### Independent Angular project for Epicodus, 04.07.2017

#### By _**Patrick McGreevy**_


## Description

This website was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.
It manages a marketplace of albums.

## Setup
1. Set project root as working directory in CLI after cloning repo.
2. Run `$ npm install`.
3. Run `$ bower install`.
4. Setup Firebase (see below).
5. Run `$ ng build`.
6. Run `$ ng serve`.
7. Visit **`localhost:4200`**  in web browser.


## Firebase setup

1. Create project in Firebase console.
2. Copy credentials from Firebase into **`src/app/api-keys.ts`**.
3. Firebase database rules to `"true"` for both `".read"` and `".write"` in Firebase console.
4. Import **`firebase_seed.json`** into Firebase.


## Project creation

1. `$ ng new club-manager`
2. `$ cd club-manager`
3. `$ bower init`
4. `$ bower install bootstrap --save`
5. `$ ng g c about`
6. `$ ng g c home`
7. `$ ng g c member-list`
8. `$ ng g c member-detail`
9. `$ npm install angularfire2 firebase --save`


## Technologies Used

* TypeScript
* Angular
* Npm
* Bower
* JSON
* Bootstrap
* Firebase

## Known Bugs

_No known bugs._


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.


## Support

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

_Please contact patrick7490@icloud.com with questions or concerns._


### License

*MIT License*

Copyright (c) 2017 _**Patrick McGreevy**_
