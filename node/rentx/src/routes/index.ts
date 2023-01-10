import express from "express";

import { authRoutes } from "./auth.routes";
import { categoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./specification.routes";
import { usersRoutes } from "./users.routes";

const routes = express();

routes.use("/categories", categoriesRoutes);
routes.use("/specification", specificationRoutes);
routes.use("/users", usersRoutes);
routes.use("/", authRoutes);
export { routes };
