const restify = require("restify");
const corsMiddleware = require('restify-cors-middleware');
// import restify from "restify";
// import {getPersons, findPersonByName} from "./personService";

const getPersons = require("./personService").getPersons;
const findPersonByName = require("./personService").findPersonByName;

const respondToGetPerson = (req, res, next) => {
  res.send(findPersonByName(req.params.name));
  next();
};

const respondToGetPersons = (req, res, next) => {
  res.send(getPersons());
  next();
};

const server = restify.createServer();
const cors = corsMiddleware({
  preflightMaxAge: 5, //Optional
  origins: ['http://localhost:3000', 'http://localhost:3333'],
  allowHeaders: ['API-Token'],
  exposeHeaders: ['API-Token-Expiry']
});

server.pre(cors.preflight)
server.use(cors.actual)

server.get("/persons/", respondToGetPersons);
server.get("/persons/:name", respondToGetPerson);

server.listen(3333, () => {
  console.log("%s listening at %s", server.name, server.url);
});