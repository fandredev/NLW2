import express from "express";
import ClassControler from "./controllers/ClassesController";
import ConnectionController from "./controllers/ConnectionsController";

const ClassesController = new ClassControler();
const ConnectionsController = new ConnectionController();
const routes = express.Router();

routes.post("/classes", ClassesController.create);
routes.get("/classes", ClassesController.index);

routes.get("/connections", ConnectionsController.index);
routes.post("/connections", ConnectionsController.create);

export default routes;
