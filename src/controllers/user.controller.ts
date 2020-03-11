import { compareSync, hashSync } from "bcrypt";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { environment } from "../environment/environment";
import { Mssql } from "../database";
import { User } from "../models";
import uuid from "uuidv4";
import { HelperService } from "../services";
export class UserController {
    mssql: Mssql = new Mssql();
    helperService: HelperService = new HelperService();

    constructor() {

    }

    public async getAllUser(req: Request, res: Response, next: NextFunction): Promise<any> {
        await this.mssql.connect().then((sql) => {
            const { getAll } = this.helperService.sql("Users");
            sql.request().query(getAll())
                .then(({ recordset }) => {
                    return res.status(200).json(recordset);
                }).catch((err) => {
                    console.log(err);
                    return res.status(400).json({ message: "Có lỗi nè ba" });
                });
        });
    }

    public async getUserById(req: Request, res: Response, next: NextFunction): Promise<any> {
        await this.mssql.connect().then((sql) => {
            const { getById } = this.helperService.sql("Users");
            const idGet = req.path.split("/")[3];
            sql.request().query(getById(idGet))
                .then(({ recordset }) => {
                    return res.status(200).json(recordset);
                }).catch((err) => {
                    console.log(err);
                    return res.status(400).json({ message: "Có lỗi nè ba" });
                });
        });
    }

    public async createNewUser(req: Request, res: Response, next: NextFunction): Promise<any> {
        await this.mssql.connect().then((sql) => {
            const model = new User({ Id: uuid(), ...req.body, CreateAt: new Date().toLocaleDateString(), UpdateAt: new Date().toLocaleDateString() });
            const { create } = this.helperService.sql("Users");
            const createData = create(model.getAllKeys(), model.getAllValues());
            sql.request().query(createData)
                .then(({ recordset }) => {
                    return res.status(200).json({ message: "New User thành công" });
                }).catch((err) => {
                    console.log(err);
                    return res.status(400).json({ message: "Ăn lỗi rồi con" });
                });
        });
    }

    public async updateUser(req: Request, res: Response, next: NextFunction): Promise<any> {
        await this.mssql.connect().then((sql) => {
            const model = new User({ ...req.body, UpdateAt: new Date().toLocaleDateString() });
            const { update } = this.helperService.sql("Users");
            const idUpdate = req.path.split("/")[3];
            const updateData = update(model.getAllKeys(), model.getAllValues(), idUpdate);
            sql.request().query(updateData)
                .then(({ recordset }) => {
                    console.log(recordset);
                    return res.status(200).json({ message: "Update User thành công" });
                }).catch((err) => {
                    console.log(err);
                    return res.status(400).json({ message: "Ăn lỗi rồi con" });
                });
        });
    }

    public async deleteUserById(req: Request, res: Response, next: NextFunction): Promise<any> {
        await this.mssql.connect().then((sql) => {
            const { deleteById } = this.helperService.sql("Users");
            const idDel = req.path.split("/")[3];
            const deleteData = deleteById(idDel);
            sql.request().query(deleteData)
                .then(({ recordset }) => {
                    return res.status(200).json({message: "Delete User thành công"});
                }).catch((err) => {
                    console.log(err);
                    return res.status(400).json({ message: "Ăn lỗi rồi con" });
                });
        });
    }

    public getUserByGroupID() {

    }

}
