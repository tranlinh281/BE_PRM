import { Application } from "express";
import { environment } from "../environment/environment";
import { AuthController } from "../controllers";
import { Auth } from "../services";

export const AuthRouter = (app: Application) => {
    app.route(environment.apiLink.auth.login)
        .post((req, res, next) => {
            new AuthController().login(req, res, next);
        });
};
