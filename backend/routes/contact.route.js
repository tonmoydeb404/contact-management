// routes/contactRoutes.js
const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contact.controller");

router.get("/contacts", contactController.getAllContacts);
router.post("/contacts", contactController.createContact);
router.put("/contacts/:id", contactController.updateContact);
router.delete("/contacts/:id", contactController.deleteContact);

module.exports = router;
