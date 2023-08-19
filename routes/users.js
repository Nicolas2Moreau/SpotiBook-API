// export const users = { user: "USER" }
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(['😀','user2', '😳', '🙄']);
});
router.get('/test', (req,res) => {
  res.render([user:"sketuveu"]);
});
router.get('/0', (req, res) => {
  res.json(['route0']);
});
router.get('/1', (req, res) => {
  res.json(['route1']);
});

module.exports = router;
