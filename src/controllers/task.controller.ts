import { NextFunction, Request, Response } from "express";
import { Mssql } from "../database";
import { Task } from "../models";
import uuid from "uuidv4";
import { HelperService } from "../services";
export class TaskController {

    mssql: Mssql = new Mssql();
    helperService: HelperService = new HelperService();

    constructor() {}

    public async getAllTask(req: Request, res: Response, next: NextFunction): Promise<any> {
        await this.mssql.connect().then((sql) => {
            const { getAll } = this.helperService.sql("Tasks");
            sql.request().query(getAll())
                .then(({ recordset }) => {
                    return res.status(200).json(recordset);
                }).catch((err) => {
                    console.log(err);
                    return res.status(400).json({ message: "Có lỗi nè ba" });
                });
        });
    }

    //Get by UserId
    public async getTaskByUserId(req: Request, res: Response, next: NextFunction): Promise<any> {
        await this.mssql.connect().then((sql) => {
            const { getByUserId } = this.helperService.sql("Tasks");
            const idUser = req.path.split("/")[3];
            sql.request().query(getByUserId(idUser))
                .then(({ recordset }) => {
                    return res.status(200).json(recordset);
                }).catch((err) => {
                    console.log(err);
                    return res.status(400).json({ message: "Có lỗi nè ba" });
                });
        });
    }

    public async createNewTask(req: Request, res: Response, next: NextFunction): Promise<any> {
        await this.mssql.connect().then((sql) => {
            const model = new Task({ Id: uuid(), ...req.body, CreateAt: new Date().toLocaleDateString(), UpdateAt: new Date().toLocaleDateString() });
            const { create } = this.helperService.sql("Tasks");
            const createData = create(model.getAllKeys(), model.getAllValues());

            sql.request().query(createData)
                .then(({ recordset }) => {
                    return res.status(200).json({ message: "New Task thành công" });
                }).catch((err) => {
                    console.log(err);
                    return res.status(400).json({ message: "Ăn lỗi rồi con" });
                });
        });
    }

    public async updateTask(req: Request, res: Response, next: NextFunction): Promise<any> {
        await this.mssql.connect().then((sql) => {
            const model = new Task({ ...req.body, UpdateAt: new Date().toLocaleDateString() });
            const { update } = this.helperService.sql("Tasks");
            const idUpdate = req.path.split("/")[3];
            const updateData = update(model.getAllKeys(), model.getAllValues(), idUpdate);
            sql.request().query(updateData)
                .then(({ recordset }) => {
                    console.log(recordset);
                    return res.status(200).json({ message: "Update Task thành công" });
                }).catch((err) => {
                    console.log(err);
                    return res.status(400).json({ message: "Ăn lỗi rồi con" });
                });
        });
    }

    public async deleteTaskById(req: Request, res: Response, next: NextFunction): Promise<any> {
        await this.mssql.connect().then((sql) => {
            const { deleteById } = this.helperService.sql("Tasks");
            const idDel = req.path.split("/")[3];
            const deleteData = deleteById(idDel);
            sql.request().query(deleteData)
                .then(({ recordset }) => {
                    return res.status(200).json({message: "Delete Task thành công"});
                }).catch((err) => {
                    console.log(err);
                    return res.status(400).json({ message: "Ăn lỗi rồi con" });
                });
        });
    }



}
