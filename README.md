![Splash Image](./assets/splash.jpg?)

# vanilla-webpack-boilerplate
For writing passionate Javascript.

Boilerplate for vanilla CSS / JS projects. Great for plugins and libraries! 

## Overview

Modern Web development has gotten far too complex. Frameworks and ornate build systems have obscured the fact that the fundamentals of JS and CSS have gotten not just slightly better but really, really good. 

This project is for people who want to write passionate code and ship it quickly. 

## Instructions

```sh
npm install
npm start
```

This will start a live-server for editing.


## To build

```sh
npm run build
```

This will
 - generate a file called bundle.min.js in the /dist folder that includes the css and js. 
 - mux and copy over the index.html file to /dist
 - copy /assets folder to /dist

## Change output name

To change the name of the built file create an **.env** file and add the variable 
OUTPUT_FILENAME to it, like so: 

```
OUTPUT_FILENAME=new-filename.min.js
```

## Custom HTML Elements

This project has an example of a custom HTML Element. For more information about custom HTML elements go to https://lnsy.dev/blog/custom-html-components.html

## A simple deployment on GitHub

Click "Use This Template" and create a new project. 

Clone the project, make your changes. 

Run

```sh
npm run build
```

In Github go to settings/pages in the project and select deploy from branch. 

Link to /dist/bundle.js on the published pages. This will load the CSS and JS. 

## About

https://lnsy.dev 

Hire Me!  

