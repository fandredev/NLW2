import express from "express";
import routes from "./routes";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const { PORT } = process.env;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Servidor running at the ${PORT}`);
});
