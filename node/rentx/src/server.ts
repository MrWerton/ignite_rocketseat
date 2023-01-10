import "reflect-metadata";
import express from "express";
import swaggerUi from "swagger-ui-express";

import "express-async-errors";
import swaggerFile from "../swagger.json";

import "./database";
import "./shared/container";
import { handleErrors } from "./middlewares/errors";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(routes);
app.use(handleErrors);
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Server run in http://localhost:${PORT}`));
