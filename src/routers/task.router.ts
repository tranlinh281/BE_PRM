import { Application } from "express";
import { environment } from "../environment/environment";
import { TaskController } from "../controllers";
import { Auth } from "../services";

export const TaskRouter = (app: Application) => {
    app.route(environment.apiLink.task.main)
        .get((req, res, next) => {
            new TaskController().getAllTask(req, res, next);
        })
        .post((req, res, next) => {
            new TaskController().createNewTask(req, res, next);
        })
       
    app.route(environment.apiLink.task.getById)
        .get((req, res, next) => {
            new TaskController().getTaskByUserId(req, res, next);
        })
        .delete((req, res, next) => {
            new TaskController().deleteTaskById(req, res, next);
        })
        .put((req, res, next) => {
            new TaskController().updateTask(req, res, next);
        });

};
