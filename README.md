# LcarsAngular

This project started as an attempt to create a web app that uses the LCARS user interface from Star Trek: The Next Generation. Mostly to impress my 8-year-old self. It became an opportunity to show off my ability with Angular 2+ by developing a seemingly simple interface that follows a common pattern, but utilizes some useful Angular tricks. All content is lifted straight from [Memory Alpha](http://memory-alpha.wikia.com/wiki/Portal:Main)

Features of this app:
- __Modularity__: Both Crew and Equipment are self-contained modules
- __Routing__: Each module has its own routing logic, AppRoutingModule defers Crew and Equipment routing to their respective routing modules
-__ActivatedRoutes__: Uses route.snapshot.params to pass crew/equipment ids to fetch details from their respective services.
-__Models__: Uses TypeScript interfaces to create models for strong typing of Crew and Equipment
-__Template Driven Forms__: Two-way databinding of new Crew/Equipment forms allow for instant preview of the details as you type them!

## To Do (Future Improvements):

- Implement styling that is more in line with TNG LCARS systems (More swooshy!).
- Add a feature that reaches out to a third-party API.
- Update data storage to a persitant database of some kind.

## Dependencies:

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.7.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
