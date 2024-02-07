# public_angular_webComponent
實現 web component

# AngularWebComponent

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

# Environment

npm install

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.  

### 入口
ng serve --project=entrance

ng serve --project=chart-line  
ng serve --project=chart-bar

##  step1 Generate application

ng generate application entrance  
ng generate application chart-line --style=scss --routing=false --skip-tests --view-encapsulation=ShadowDom  
ng generate application chart-bar --style=scss --routing=false --skip-tests --view-encapsulation=ShadowDom

## step2 rename

rename folder and file

## step3 update app.module.ts in project

## step4 update index.html add <selector>

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

範例：（ 執行直接使用 package.json 裡面的 scripts ）  
ng build --project=chart-line --configuration=production --single-bundle --output-hashing=none




## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
