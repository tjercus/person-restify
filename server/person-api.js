
// es6 imports don't work in node.js yet!
// import restify from "restify";

const restify = require("restify");
const corsMiddleware = require('restify-cors-middleware');

const makePersonService = require("./personService");

const personService = makePersonService();

const respondToGetPerson = (req, res, next) => {
  res.send(personService.findPersonByName(req.params.name));
  next();
};

const respondToGetPersons = (req, res, next) => {
  res.send(personService.getPersons());
  next();
};

const server = restify.createServer();
const cors = corsMiddleware({
  preflightMaxAge: 5, //Optional
  origins: ['http://localhost:3000', 'http://localhost:3333'],
  allowHeaders: ['API-Token'],
  exposeHeaders: ['API-Token-Expiry']
});

server.pre(cors.preflight);
server.use(cors.actual);

server.get("/persons/", respondToGetPersons);
server.get("/persons/:name", respondToGetPerson);

server.listen(3333, () => {
  console.log("%s listening at %s", server.name, server.url);
});