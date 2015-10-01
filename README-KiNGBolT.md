KiNGBolT
========
Demonstrates usage of Karma, AngularJS, Gulp, Bower, Typescript and Angular-material.

Don't expect an impressive Website!

This is just a "Hello-World"-Sample to show how Angular, Karma and TypeScript can work together.


Getting started
---------------
0) Install [Node.js](http://nodejs.org)

1) Open a Node.js command prompt (shell with Node.js-environment-variables set)

2) download all files we need:
```bash
npm install
bower install
```
3) to get TypeDefinitions from DefinitelyTyped, compile all TypeScript-Files initially and test the result:
```bash
gulp tsd
gulp compileAll
gulp test
```

While developing
----------------
1. When Typscript-Sourcecode or UnitTests are changed the files are compiled automatically to JavaScript.
2. Automatically the Tests are exectued after every detected change in the resulting JavaScript-Application and -Tests.
3. A development-webserver and a Browser are started. The Browswer refreshes on changes in Typescript- or HTML-Files.

This does everything automatically:

```bash
gulp
```

While developing - other options
--------------------------------
1a) to build automatically when Typescript-files in src- or test-directory are saved run:
```bash
gulp watch
```

1b) instead of 1a) you can run a webserver and a browser that updates automatically if Typescript- or HTML-Files are changed:
```bash
gulp watchServe
```

2) to test automatically when src- or test-files are changd (in a second NodeJS-command-prompt) run:
```bash
gulp watchTest
```
...this tests the app.min.js-file to make sure that our Dependency-Injections are working


Should Read
-----------
Github John Papa - modular angular sample app for teams - https://github.com/johnpapa/ng-demos/tree/master/modular

Github Google web-starter-kit - eg. gulp sample: https://github.com/google/web-starter-kit/blob/master/gulpfile.js

Blog - Angular with Typescript: http://www.scottlogic.com/blog/2014/08/26/StrongTypingWithAngularJS.html

Blog - AngularJS in TypeScript – Modules: http://kodeyak.wordpress.com/2014/02/14/angularjs-in-typescript-modules/

Slide DAB Bank: http://de.slideshare.net/DavidAm/multi-modularized-project-setup-with-gulp-typescript-and-angularjs


How we get the typings for 3rd-party-stuff: 
TypeScript Definition Manger: https://github.com/DefinitelyTyped/tsd
```bash
npm install tsd@next -g
tsd install angularjs/ --save
```
