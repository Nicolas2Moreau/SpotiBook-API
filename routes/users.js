// export const users = { user: "USER" }
import bdd from './bdd.js'
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(['😀','user2', '😳', '🙄']);
});
router.get('/user', (req, res) => {
    res.json(bdd.users[1].nom);
  });
  router.get('/livre', (req, res) => {
    res.json(bdd);
  });
router.post('/post', (req, res) => {
    let newData = {
        "taken": true
    }
    bdd.livres[1].push(newData)
    res.json('POST CA MARCHE');
  });
router
  .route("/:id")
  .get((req, res) => {
    res.send(`Get User with ID ${req.params.id}`);
  })


module.exports = router;
