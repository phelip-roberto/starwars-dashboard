# Star Wars DashBoard

Projeto do Dashboard relacionado a Star Wars. Em tal projeto serão utilizadas tecnologias como AngularJs e Bootstrap. 
 
<p align="center">	
   <a href="https://www.linkedin.com/in/phelip-roberto">
      <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
   </a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/phelip-roberto/starwars-dashboard?color=FB250">

  <a href="https://github.com/phelip-roberto/starwars-dashboard/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/phelip-roberto/starwars-dashboard?color=FB250">
  </a> 

</p>

![alt text](https://intertvweb.com.br/wp-content/uploads/2017/05/capa-12.jpg)


## :computer: Technologies

Esse projeto foi desenvolvido utlizando:

* Angular CLI - https://cli.angular.io/

* NodeJs - https://www.npmjs.com/get-npm

* JSON Server - https://www.npmjs.com/package/json-server

## :book: Documentation

* Documentation for get started with the stable version of [AngularJs](https://angular.io/guide/quickstart);

* Documentation for get started with the latest version of [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/);

* Documentation for get started with [PrimeNg](https://www.primefaces.org/primeng/#/), that is a rich set of open source native Angular UI components;

* Documentation for get started with [JsonServer](https://www.npmjs.com/package/json-server);

## :construction_worker: Installation

### Clone repo

Copy all your files to your project folder and then:

``` bash
#go into app's directory
$ cd starwars-dashboard

# install app's dependencies
$ npm install
```
### Usage

``` bash
# run at localhost:3000 the json server thats consumes db.json
$ npm run server

# serve at localhost:4200 with the proxy configuration for the use of the services
$ npm start

# serve with hot reload at localhost:4200
$ ng serve

# serve with hot reload at localhost:4200, opening when finish to serve
$ ng serve --open

# serve with hot reload at defined port
$ ng serve --open --port=XXXX

# build for production with minification
$ ng build

# build for production using the environment variable
$ npm run build-dist

# start JSON Server (enter the db.json file folder)
$ json-server --watch db.json
```

## What's included

```

starwars-dashboard/
├── e2e/
├── src/
│   ├── app/
│   ├── assests/
│   ├── environments/
│   ├── index.html
│   └── ...
├── .angular.json
├── ...
├── package.json
├── server.js
└── ...
```
