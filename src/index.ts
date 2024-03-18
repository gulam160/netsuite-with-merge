import "dotenv/config";
import express from "express";
import cors from "cors";
import { netsuite } from "./routes/netsuite.router";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use("/", netsuite);

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
