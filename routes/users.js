const express = require("express");
const router = express.Router();
const Users = require("../models/user");

//getting all
router.get("/", async (req, res) => {
  res.send("hey there");
});
//getting one
router.get("/:id", async (req, res) => {
  res.send(req.params.id);
});
//creating one
router.post("/", async (req, res) => {});
//updating one
router.patch("/:id", async (req, res) => {});
//deleting one
router.delete("/:id", async (req, res) => {});

module.exports = router;
