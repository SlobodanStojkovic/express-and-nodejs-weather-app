# Express and NodeJS Weather App

## This Weather Application will show you weather details like temperature and humidity for the desired location.

### To run this application:
1. Clone project repository
2. Run npm install from terminal
3. Run node src/app.js

If you want to run a server that will monitor changes on your code and do updates without you having to run src/app.js after each change, you need to have nodemon and then run from terminal:
nodemon src/app.js -e js,hbs

If you don't have nodemon installed run "npm i nodemon", or if you want to install nodemon globally then run 
npm install -g nodemon

Wait 30 seconds for server, or if it doesn't open, go to http://localhost:3000/ and there you can type inside input city for which you want to see weather details.
