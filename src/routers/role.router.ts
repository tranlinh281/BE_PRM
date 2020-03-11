import { Application } from "express";
import { environment } from "../environment/environment";
import { RoleController } from "../controllers";
import { Auth } from "../services";

export const RoleRouter = (app: Application) => {
    app.route(environment.apiLink.role.main)
        .get((req, res, next) => {
            new RoleController().getAll(req, res, next);
        })
        .post((req, res, next) => {
            new RoleController().createRole(req, res, next);
        })
        .put((req, res, next) => {
            new RoleController().updateRole(req, res, next);
        });

    app.route(environment.apiLink.role.getById)
        .get((req, res, next) => {
            new RoleController().getById(req, res, next);
        })
        .delete((req, res, next) => {
            new RoleController().deleteRole(req, res, next);
        });

};
