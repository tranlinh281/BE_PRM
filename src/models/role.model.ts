export class Role {
    public Id: string;
    public Name: string;
    constructor({ Id, Name }: { Id: string, Name: string }) {
        this.Id = Id;
        this.Name = Name;
    }

    selectSQL(): string {
        return "select * from roles";
    }

    createSQL(): string {
        return "insert into roles(Id,Name) " + "values('" + this.Id + "','" + this.Name + "')";
    }

    updateSQL(): string {
        return "update roles set name = '" + this.Name + "' where id = '" + this.Id + "'";
    }

    deleteSQL(idDel: String): string {
        return "delete from roles where id = '" + idDel + "'";
    }
}