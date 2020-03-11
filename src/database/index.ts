import { ConnectionPool, Request } from 'mssql';
import { environment } from '../environment/environment';

export class Mssql {
    constructor() {
    }
    async connect(): Promise<ConnectionPool> {
        const path = require('path');
        console.log(path.join('LINHTTSE63176', 'SQLEXPRESS'));
        return await new ConnectionPool({
            user: "sa",
            password: "123456",
            server: 'LINHTTSE63176',
            stream: true,
            database: "jobsmanagement",
            options: {
                encrypt: false,
                instanceName: 'SQLEXPRESS',
                database: "jobsmanagement",
            }

        }).connect();
    }

}
