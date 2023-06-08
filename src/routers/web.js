import express from "express";
import homeController from "../controllers/homeController"
const router = express.Router();

const initWebRouter = (app) => {
    router.get("/",homeController.getHomePage)
    router.get("/single_page.html",homeController.getSinglePage)
    router.get("/404.html",homeController.getErrorPage)
    router.get("/index.html",homeController.getHomePage)
    router.get("/contact.html",homeController.getContactPage)
    router.get("/pages/contact.html",homeController.getContactPage)
    router.get("/login",homeController.getLoginPage)
    router.post("/createNewContact",homeController.createNewContact)
    router.post("/getAuth",homeController.getAuth)
    router.post("/deleteUser",homeController.deleteUser)
    router.get("/User",homeController.getUser)
    router.get("/editUser/:id",homeController.editUser)
    router.post("/updateUser",homeController.updateUser)
    router.post("/addUser",homeController.addUser)
    router.get("/Category",homeController.getCategory)
    router.post("/deleteCategory",homeController.deleteCategory)
    router.get("/editCategory/:id",homeController.editCategory)
    router.post("/updateCategory",homeController.updateCategory)
    // router.post("/addCategory",homeController.addCategory)
    return app.use('/',router)
};
export default initWebRouter;
