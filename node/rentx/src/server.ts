import "reflect-metadata";
import express from "express";
import swaggerUi from "swagger-ui-express";

import swaggerFile from "../swagger.json";

import "./database";
import "./shared/container";

import { authRoutes } from "./routes/auth.routes";
import { categoriesRoutes } from "./routes/categories.routes";
import { specificationRoutes } from "./routes/specification.routes";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use("/categories", categoriesRoutes);
app.use("/specification", specificationRoutes);
app.use("/users", usersRoutes);
app.use("/", authRoutes);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Server run in http://localhost:${PORT}`));
