import { NextFunction, Request, Response } from "express";
import { Mssql } from "../database";
import { verify } from "jsonwebtoken";
import { environment } from "../environment/environment";

export const Auth = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];
    if (token) {
        const decoded = verify(token + "", "Login thanh congdasfdsfaedafsdf", { issuer: "JobsManagement", subject: "dasdadasdfsdfsas" });
        const username = Object.assign(decoded.valueOf()).aud;

        const mssql: Mssql = new Mssql();
        await mssql.connect().then((sql) => {
            sql.request()
                .input("username", username)
                .query("select name from roles where Id = (select roleId from users where username = @username) ")
                .then(({ recordset }) => {
                    let roles: string[] = [];
                    const accessRole = environment.accessRole.find(e => req.url.includes(e.api));
                    roles = accessRole ? accessRole.method[req.method as "GET" | "POST" | "PUT" | "DELETE"] : [];
                    const name = recordset[0].name;
                    if (roles.indexOf(name) > -1) {
                        req.headers['username'] = username;
                        next();
                    } else {
                        return res.status(400).json({ message: "K co quyen" });
                    }

                }).catch((err) => {
                    console.log(err);
                    return res.status(400).json({ message: "Có lỗi nè ba" });
                });
        });
    } else {
        res.status(400).json({ message: "Co loi xay ra" });
    }
}