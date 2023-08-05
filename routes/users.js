// export const users = { user: "USER" }
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(['😀','user2', '😳', '🙄']);
});

module.exports = router;