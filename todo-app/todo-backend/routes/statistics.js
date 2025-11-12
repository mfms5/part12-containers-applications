const express = require("express");
const router = express.Router();
const redis = require("../redis");

/* GET to-dos data. */
router.get("/", async (req, res) => {
  const added_todos = await redis.getAsync("added_todos");

  res.send({
    added_todos: added_todos || 0,
  });
});

module.exports = router;
