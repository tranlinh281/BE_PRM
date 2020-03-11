export class HelperService {
    constructor() {

    }

    sql = (tableName: string) => {
        const checkType = (value: any) => {
            if (typeof value === "string") {
                return "'" + value + "'";
            } else {
                return value;
            }
        }

        const getAll = () => {
            return "Select * From " + tableName;
        }

        const getById = (id: string) => {
            return "Select * From " + tableName + " Where Id ='" + id + "'";
        }

        const create = (models: string[], data: any): string => {
            let createSQL = "Insert Into " + tableName;
            let columm = "(";
            let values = "Values(";
            models.forEach((element, i) => {
                if (data[element]) {
                    columm += element + ",";
                    values += checkType(data[element]) + ",";
                }
            });
            if (columm.charAt(columm.length - 1) === ",") {
                columm = columm.substring(0, columm.length - 1) + ")";
            }
            if (values.charAt(values.length - 1) === ",") {
                values = values.substring(0, values.length - 1) + ")";
            }
            return createSQL + columm + " " + values;
        }

        const update = (models: string[], data: any, id: string): string => {
            let updateSQL = "Update " + tableName + " Set ";
            let values = "";
            models.forEach((element, i) => {
                if (data[element]) {
                    values += element + " = " + checkType(data[element]) + ",";
                }
            });
            if (values.charAt(values.length - 1) === ",") {
                values = values.substring(0, values.length - 1) + "";
            }
            return updateSQL + values + " Where Id = '" + id + "'";
        }

        const deleteById = (id: string): string => {
            return "Delete " + tableName + " Where Id = '" + id + "'";
        }

        const getByUserId = (id: string): string => {
            return "Select * From " + tableName + " Where UserId = '" + id + "'";
        }

        // const getUserByGroupID = (id: string): string => {

        // }

        return { create, update, getAll, deleteById, getById, getByUserId };
    }
}