import { compareSync, hashSync } from "bcrypt";
import { NextFunction, Request, Response } from "express";
import { Role } from '../models';
import { Mssql } from "../database";
import uuid from "uuidv4";
import { Group } from "../models/group.model";
import { verify } from "jsonwebtoken";
import { HelperService } from "../services";
export class GroupController {
    mssql: Mssql = new Mssql();
    helperService: HelperService = new HelperService();

    constructor() {

    }

    //Get all Group
    public async getAllGroups(req: Request, res: Response, next: NextFunction): Promise<any> {
        await this.mssql.connect().then((sql) => {
            const { getAll } = this.helperService.sql("Groups");
            const selectSQL = getAll();
            sql.request().query(selectSQL)
                .then(({ recordset }) => {
                    return res.status(200).json(recordset);
                }).catch((err) => {
                    console.log(err);
                    return res.status(400).json({ message: "Có lỗi nè ba" });
                });
        });
    }

    //Create new group
    public async createNewGroup(req: Request, res: Response, next: NextFunction): Promise<any> {
        await this.mssql.connect().then((sql) => {
            // const {aud}: any = verify(req.headers['authorization'] + "", "Login thanh congdasfdsfaedafsdf", { issuer: "JobsManagement", subject: "dasdadasdfsdfsas" });
            const model = new Group({ Id: uuid(), ...req.body, CreateBy: "tranlinh", UpdateBy: "tranlinh", CreateAt: new Date().toLocaleDateString(), UpdateAt: new Date().toLocaleDateString() });
            const { create } = this.helperService.sql("Groups");
            const insertSQL = create(model.getAllKeys(), model.getAllValues());
            sql.request().query(insertSQL)
                .then(({ recordset }) => {
                    return res.status(200).json({ message: "Thanh cong add group" });
                }).catch((err) => {
                    console.log(err);
                    return res.status(400).json({ message: "Có lỗi nè ba" });
                });
        });
    }

    //Update group by ID
    public async updateGroupByID(req: Request, res: Response, next: NextFunction): Promise<any> {
        await this.mssql.connect().then((sql) => {
            const model = new Group({ ...req.body, UpdateAt: new Date().toLocaleDateString() });
            const { update } = this.helperService.sql("Groups");
            const idUpdate = req.path.split("/")[3];
            const updateData = update(model.getAllKeys(), model.getAllValues(), idUpdate);
            sql.request().query(updateData)
                .then(({ recordset }) => {
                    return res.status(200).json({ message: "Thanh cong update" });
                }).catch((err) => {
                    console.log(err);
                    return res.status(400).json({ message: "Có lỗi nè ba" });
                });
        });
    }

    //Delete Group by Id
    public async deleteGroupByID(req: Request, res: Response, next: NextFunction): Promise<any> {
        await this.mssql.connect().then((sql) => {
            const { deleteById } = this.helperService.sql("Groups");
            const idDel = req.path.split("/")[3];
            const deleteSQL = deleteById(idDel);
            sql.request().query(deleteSQL)
                .then(({ recordset }) => {
                    return res.status(200).json({ message: "Delete thanh cong" });
                }).catch((err) => {
                    console.log(err);
                    return res.status(400).json({ message: "Có lỗi nè ba" });
                });
        });
    }

    //Get group by ID
    public async getGroupByID(req: Request, res: Response, next: NextFunction): Promise<any> {
        await this.mssql.connect().then((sql) => {
            const { getById } = this.helperService.sql("Groups");
            const idGet = req.path.split("/")[3];
            const selectByIdSQL = getById(idGet);
            sql.request().query(selectByIdSQL)
                .then(({ recordset }) => {
                    console.log(recordset);
                    return res.status(200).json(recordset);
                }).catch((err) => {
                    console.log(err);
                    return res.status(400).json({ message: "Có lỗi nè ba" });
                });
        });
    }
}
