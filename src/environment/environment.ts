export const environment = {
    apiLink: {
        endPoint: "http://localhost:3000",
        auth: {
            main: '/api/Auth',
            login: '/api/Auth/Login',
        },
        user: {
            main: '/api/User',
            getById: '/api/User/:id'
        },
        role: {
            main: '/api/Role',
            getById: '/api/Role/:id',
        },
        group: {
            main: '/api/Group',
            getById: '/api/Group/:id'
        },
        task: {
            main: '/api/Task',
            getById: '/api/Task/:id'
        }
    },
    accessRole: [
        {
            api: 'api/Role',
            method: {
                "GET": ["Admin", "Manager"],
                "POST": ["Admin"],
                "PUT": ["Admin"],
                "DELETE": ["Admin"],
            }
        },
        {
            api: 'api/User',
            method: {
                "GET": ["Admin", "Manager"],
                "POST": ["Admin"],
                "PUT": ["Admin"],
                "DELETE": ["Admin"],
            }
        }
    ],
    database: {
        config: {
            user: "sa",
            password: "123456",
            server: "LINHTTSE63176\\SQLEXPRESS",
            database: "jobsmanagement",
            port: 1433,
            options: {
                enableArithAbort: true,
                encrypt: true,
            }
        }
    }
}