import { compareSync, hashSync } from "bcrypt";
import { NextFunction, Request, Response } from "express";
import { verify, sign } from "jsonwebtoken";
import { environment } from "../environment/environment";
import { Mssql } from "../database";
import uuid from "uuidv4";
export class AuthController {

    mssql: Mssql = new Mssql();

    constructor() { }

    public async login(req: Request, res: Response, next: NextFunction): Promise<any> {
        await this.mssql.connect().then((sql) => {
            sql.request()
                .input("username", req.body.UserName)
                .input("password", req.body.PassWord)
                .query("select * from users where username = @username and password = @password")
                .then(({ recordset }) => {
                    console.log(recordset);
                    return res.status(200).json({ accessToken: sign({}, "Login thanh congdasfdsfaedafsdf", { expiresIn: "24h", audience: req.body.UserName, issuer: "JobsManagement", subject: "dasdadasdfsdfsas" }) });
                }).catch((err) => {
                    console.log(err);
                    return res.status(400).json({ message: "Có lỗi nè ba" });
                });
        });
    }
}
