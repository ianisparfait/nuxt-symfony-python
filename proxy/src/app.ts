import express from "express";
import bodyParser from "body-parser";

import middleware from "./middleware";

import userService from "./services/user";
import { urlApi } from "./endpoints";
const app = express();
const port = 8000;
const version = "v0";

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(middleware());

app.get(urlApi, (_, res): void => {
  res.send(JSON.parse(`{"version": "${version}"}`));
});

app.listen(port, (): void => console.log(`Server running at http://localhost:${port}`));

userService.Endpoints(app);
