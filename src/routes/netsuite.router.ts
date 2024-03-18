import express from "express";
import { exchangePublicToken, linkToken } from "../controllers";

const netsuite = express.Router();

netsuite.post("/link-token", linkToken);
netsuite.post("/public-token", exchangePublicToken);

export { netsuite };
