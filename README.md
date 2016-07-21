# modern-project
Use NPM,Babel,Webpack and Eslint to Init your Project

Say you want create a JavaScript project which has es6 and linting feature
enabled on Github.This is just the turtorial for this.   

## create the repo

First, you need to create an empty repo from Github. Let's say `morden-project`.
Then clone the repo to your local disk.

## init with `npm`

Use `npm` to initialize the project.

```
npm init
```
This help you to add a `package.json` to your poroject.

## install webpack

```
npm install webpack --save-dev
```

## install bable loader

```
npm install babel-core babel-loader --save-dev

// install preset(collecction of transforms)
npm install babel-preset-es2015 --save-dev

// polyfill

npm install babel-runtime --save
npm install babel-plugin-transform-runtime --save-dev
```


