import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";
import { specificationRoutes } from "./routes/specification.routes";

const app = express();
app.use('/categories', categoriesRoutes)
app.use('/specification', specificationRoutes)
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server run in http://localhost/${PORT}`));
