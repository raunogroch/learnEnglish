import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dictionayRoutes from "./src/routes/dictionary.routes.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api", dictionayRoutes);

app.listen(PORT, () => {
  console.log(`your server is running on http://localhost:${PORT}`);
});
