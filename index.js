import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { isCelebrateError, errors } from "celebrate";
import { MONGODB_URI, CORS_METHODS } from "./config.js";

import routes from "./routes/index.js";
import bodyParser from "body-parser";

// express items
const app = express();
app.use(
  cors({
    origin: "*",
    methods: CORS_METHODS,
  })
);
app.use(bodyParser.json({ limit: "50mb" }));

const connectionString = MONGODB_URI;

// use routes
app.use(routes);

// middleware to log Celebrate validation errors
app.use((err, req, res, next) => {
  if (isCelebrateError(err)) {
    console.error(err);
  }
  next(err);
});

// Celebrate middleware to return validation errors
app.use(errors());

// connect to mongodb
mongoose.connect(connectionString).then(() => console.log("connected"));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
