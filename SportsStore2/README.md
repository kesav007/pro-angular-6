cd SportsStore
npm install bootstrap@4.1.1
npm install font-awesome@4.7.0
npm install --save-dev json-server@0.12.1
npm install --save-dev jsonwebtoken@8.1.1

"styles": [
 "src/styles.css",
 "node_modules/bootstrap/dist/css/bootstrap.min.css",
 "node_modules/font-awesome/css/font-awesome.min.css"
 ],

Listing 7-2. Adding a Script in the package.json File in the SportsStore Folder
...
"scripts": {
 "ng": "ng",
 "start": "ng serve",
 "build": "ng build",
 "test": "ng test",
 "lint": "ng lint",
 "e2e": "ng e2e",
 "json": "json-server data.js -p 3500 -m authMiddleware.js"
},

"compilerOptions"
"strictPropertyInitialization": false,
"strictNullChecks": false,

"angularCompilerOptions":
"strictDomEventTypes": false,

npm run json
ng serve --port 3000 --open

http://localhost:3500/products
http://localhost:3500/db

exports is module ?
