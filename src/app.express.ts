import { json, urlencoded } from "body-parser";
import express, { Application, NextFunction, Request, Response } from "express";
import { readFileSync } from "fs";
import { environment } from "./environment/environment";
import { routers } from "./routers";
export class App {
    public app: Application;

    constructor(
        private port?: number | string,
    ) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    public async listen() {
        await this.app.listen(this.app.get("port"));
        console.log("Server on port", this.app.get("port"));
    }

    private settings() {
        this.app.use(urlencoded({ limit: "50mb", extended: false }));
        this.app.use(json({ limit: "50mb" }));
        this.app.set("port", process.env.PORT || 3000);
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
            res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type,authorization");
            next();
        });
    }

    private middlewares() {
        // this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    private routes() {
        routers.forEach((route) => route(this.app));
    }

}
