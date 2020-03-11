export class Group {
    Id: string;
    Name: string;
    CreateBy?: string;
    UpdateBy?: string;
    CreateAt?: Date;
    UpdateAt?: Date;
    IsDelete?: number;

    constructor({ Id, Name, CreateBy, UpdateBy, CreateAt, UpdateAt, IsDelete }:
        {
            Id: string, Name: string, CreateBy?: string, UpdateBy?: string, CreateAt?: Date, UpdateAt?: Date,  IsDelete?: number
        }) {
        this.Id = Id;
        this.Name = Name;
        this.CreateBy = CreateBy;
        this.UpdateBy = UpdateBy;
        this.CreateAt = CreateAt;
        this.UpdateAt = UpdateAt;
        this.IsDelete = IsDelete;
    }

    getAllKeys(): string[] {
        return ["Id", "Name", "CreateBy", "UpdateBy", "CreateAt", "UpdateAt", "IsDelete"];
    }

    getAllValues(): any {
        return {
            Id: this.Id,
            Name: this.Name,
            CreateBy: this.CreateBy,
            UpdateBy: this.UpdateBy,
            CreateAt: this.CreateAt,
            UpdateAt: this.UpdateAt,
            IsDelete: this.IsDelete,
        }
    }
}