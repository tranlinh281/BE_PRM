import { compareSync, hashSync } from "bcrypt";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { environment } from "../environment/environment";
import { Role } from '../models';
import { Mssql } from "../database";
import uuid from "uuidv4";
export class RoleController {
    mssql: Mssql = new Mssql();

    constructor() {

    }

    //Get all roles
    public async getAll(req: Request, res: Response, next: NextFunction): Promise<any> {
        await this.mssql.connect().then((sql) => {
            const dataSelect = new Role({...req.body}).selectSQL();
            sql.request().query(dataSelect)
                .then(({ recordset }) => {
                    return res.status(200).json(recordset);
                }).catch((err) => {
                    console.log(err);
                    return res.status(400).json({ message: "Có lỗi nè ba" });
                });
        });
    }

    //Create new role
    public async createRole(req: Request, res: Response, next: NextFunction): Promise<any> {
        await this.mssql.connect().then((sql) => {
            const createData = new Role({ Id: uuid(), ...req.body }).createSQL();
            sql.request().query(createData)
                .then(({ recordset }) => {
                    return res.status(200).json({ message: "Thanh cong add" });
                }).catch((err) => {
                    console.log(err);
                    return res.status(400).json({ message: "Có lỗi nè ba" });
                });
        });
    }

    //Update role by ID
    public async updateRole(req: Request, res: Response, next: NextFunction): Promise<any> {
        await this.mssql.connect().then((sql) => {
            const updateData = new Role({ ...req.body }).updateSQL();
            sql.request().query(updateData)
                .then(({ recordset }) => {
                    return res.status(200).json({ message: "Thanh cong update" });
                }).catch((err) => {
                    console.log(err);
                    return res.status(400).json({ message: "Có lỗi nè ba" });
                });
        });
    }

    //Delete Role by Id
    public async deleteRole(req: Request, res: Response, next: NextFunction): Promise<any> {
        await this.mssql.connect().then((sql) => {
            const idDel = req.path.split("/")[3];
            const deleteSQL = new Role({...req.body}).deleteSQL(idDel);
            sql.request().query(deleteSQL)
                .then(({ recordset }) => {
                    return res.status(200).json({ message: "Delete thanh cong" });
                }).catch((err) => {
                    console.log(err);
                    return res.status(400).json({ message: "Có lỗi nè ba" });
                });
        });
    }

    //Get role by ID
    public async getById(req: Request, res: Response, next: NextFunction): Promise<any> {
        await this.mssql.connect().then((sql) => {
            sql.request().query("select * from roles where id = '" + req.path.split("/")[3] + "'")
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
