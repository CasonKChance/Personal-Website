import dotenv from "dotenv";
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

import express from "express";
const app = express();
import cors from "cors";
import router from "./routes/router.js";

app.use(express.json());
app.use(cors());
app.use(router);
app.use("/", express.static("public"));

app.listen(8080, () => {
  console.log("Port 8080");
});
