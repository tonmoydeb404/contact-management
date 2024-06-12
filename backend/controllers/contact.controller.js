// controllers/contactController.js
const Contact = require("../models/contact.model");

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.getAll();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createContact = async (req, res) => {
  try {
    const contact = req.body;

    const result = await Contact.create(contact);
    res.status(201).json({ id: result.insertId, ...contact });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = req.body;
    await Contact.update(id, contact);
    res.json({ id, ...contact });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    await Contact.delete(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
