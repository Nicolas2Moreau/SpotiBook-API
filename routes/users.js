// export const users = { user: "USER" }
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(['😀','user2', '😳', '🙄']);
});
router
  .route("/:id")
  .get((req, res) => {
    res.send(`Get User with ID ${req.params.id}`);
  })


module.exports = router;
