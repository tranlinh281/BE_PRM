import { Application } from "express";
import { environment } from "../environment/environment";
import { AuthController } from "../controllers";
import { Auth } from "../services";
import { UserController } from "../controllers/user.controller";

export const UserRouter = (app: Application) => {
    app.route(environment.apiLink.user.main)
        .get((req, res, next) => {
            new UserController().getAllUser(req, res, next);
        })
        .post((req, res, next) => {
            new UserController().createNewUser(req, res, next);
        });
    app.route(environment.apiLink.user.getById)
        .get((req, res, next) => {
            new UserController().getUserById(req, res, next);
        })
        .put((req, res, next) => {
            new UserController().updateUser(req, res, next);
        })
        .delete((req, res, next) => {
            new UserController().deleteUserById(req, res, next);
        })
};
