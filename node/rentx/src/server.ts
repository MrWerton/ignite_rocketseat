import express from "express";
import swaggerUi from "swagger-ui-express";

import swaggerFile from "../swagger.json";
import { categoriesRoutes } from "./routes/categories.routes";
import { specificationRoutes } from "./routes/specification.routes";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use("/categories", categoriesRoutes);
app.use("/specification", specificationRoutes);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Server run in http://localhost:${PORT}`));
