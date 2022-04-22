const express = require("express");
import db from "../db";

const router = express.Router();

// const chirpsStore = require("../chirpstore.js");
// no more chirpstore! install mysql from npm and configure the routes to use that instead of chirpstore.

// REST API
router.get("/:id?", async (req, res) => {
  const id = req.params.id;
  if (id) {
    res.send(await db.one(id));
  } else {
    res.send(await db.all());
  }
});

// // Create
router.post("/", async (req, res) => {
  const body = req.body;
  console.log(body);
  let user = await db.postUser(body.name);
  console.log(user);

  await db.postChirp(body.content, user.insertId);
  res.sendStatus(200);
});

// Delete
router.delete("/:id", async (req, res) => {
 try {
   const id = req.params.id;
   await db.deleteChirps(id)
   res.sendStatus(200);
 } catch (err) {
   if (err) throw err;
 }
});

// // Update
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  console.log(body)
  await db.editChirp(body.value, id)
  res.sendStatus(200);
});


export default router;
