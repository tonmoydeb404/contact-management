const db = require("../configs/db.config");

class Contact {
  static async getAll() {
    const [rows] = await db.execute("SELECT * FROM contacts");
    return rows;
  }

  static async create(contact) {
    const { name, email, phone } = contact;
    const [result] = await db.execute(
      "INSERT INTO contacts (name, email, phone) VALUES (?, ?, ?)",
      [name, email, phone]
    );
    return result;
  }

  static async update(id, contact) {
    const { name, email, phone } = contact;
    const [result] = await db.execute(
      "UPDATE contacts SET name = ?, email = ?, phone = ? WHERE id = ?",
      [name, email, phone, id]
    );
    return result;
  }

  static async delete(id) {
    const [result] = await db.execute("DELETE FROM contacts WHERE id = ?", [
      id,
    ]);
    return result;
  }
}

module.exports = Contact;
