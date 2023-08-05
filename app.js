// import users from "./routes/users.js";
// const router = express.Router();

const express = require('express');
// router.use('/users', this.routes);
const api = require('./routes');
const app = express();

//////////////////////////////////
// permettre l'accès à l'API (CORS)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token,Origin, X-Requested-With, Content, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  
//   app.use((req, res) => {
//     res.json({ message: "BANDOUR FROM vercel routes!" }); 
//  });

 
app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});
app.use('/api/v1', api);
// router.get("/", async (req, res) => {
//   res.json(users); 
// });

// const users = require('./routes/users.js');



// router.get('/', async(req, res) => {
//   res.json({
//     message: 'API - 👋🌎🌍🌏',
//   });
// });


module.exports = app;


