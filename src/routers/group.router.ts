import { Application } from "express";
import { environment } from "../environment/environment";
import { GroupController } from "../controllers";

export const GroupRouter = (app: Application) => {
    app.route(environment.apiLink.group.main)
        .get((req, res, next) => {
            new GroupController().getAllGroups(req, res, next);
        })
        .post((req, res, next) => {
            new GroupController().createNewGroup(req, res, next);
        });
    app.route(environment.apiLink.group.getById)
        .get((req, res, next) => {
            new GroupController().getGroupByID(req, res, next);
        })
        .put((req, res, next) => {
            new GroupController().updateGroupByID(req, res, next);
        })
        .delete((req, res, next) => {
            new GroupController().deleteGroupByID(req, res, next);
        })
};
