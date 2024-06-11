// server.js
const express = require("express");
const dotenv = require("dotenv");
const contactRoutes = require("./routes/contact.route");

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api", contactRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
