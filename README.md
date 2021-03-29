# node-07-weather

# deploy: https://node-07weather.herokuapp.com/api/v1/

This is a weather Api, connected with mapbox and Open weather to find the weather of the city you prefer.

# HOW TO INSTALL DEPENDENCES

Clone the repository git clone https://github.com/VeraManuel/node-07-weather.git

go to directory cd node-07-weather

Run command npm install

Generate .env file with mapbox apikey.
Generate .env file with Open Weather apikey.

# Scripts

Run npm run dev to nodemon mode.

npm start to deploy aplication in production env.

Run node index to traditional mode.

# PACKAGES

- express (create server and API-REST´s endpoints).
- nodemon (aplication refresh whenever we modify code).
- morgan (request and response informartion).
- dotenv (enviroment variables).
- winston (logger to app´s operations ).
- swagger-ui-express (For api documentation).
  -axios (to comunication with others apis).
