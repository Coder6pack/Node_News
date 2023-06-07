import express from "express";
import homeController from "../controllers/homeController"
const router = express.Router();

const initWebRouter = (app) => {
    router.get("/",homeController.getHomePage)

    return app.use('/',router)
};

export default initWebRouter;
