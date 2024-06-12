// server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const contactRoutes = require("./routes/contact.route");
const { corsConfig } = require("./configs/cors.config");

dotenv.config();

const app = express();

app.use(cors(corsConfig));
app.use(express.json());
app.use("/api", contactRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
