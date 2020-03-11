export class User {
    public Id: string;
    public UserName: string;
    public PassWord: string;
    public FullName?: string;
    public Avatar?: string;
    public RoleId?: string;
    public GroupId?: string;
    public CreateBy?: string;
    public UpdateBy?: string;
    public CreateAt?: Date;
    public UpdateAt?: Date;

    constructor({ Id, UserName, PassWord, FullName, Avatar, RoleId, GroupId, CreateBy, UpdateBy, CreateAt, UpdateAt, IsDelete }:
        {
            Id: string, UserName: string, PassWord: string,
            FullName?: string, Avatar?: string, RoleId?: string, GroupId?: string,
            CreateBy?: string, UpdateBy?: string, CreateAt?: Date, UpdateAt?: Date, IsDelete?: boolean
        }) {
        this.Id = Id;
        this.UserName = UserName;
        this.PassWord = PassWord;
        this.FullName = FullName;
        this.Avatar = Avatar;
        this.RoleId = RoleId;
        this.CreateBy = CreateBy;
        this.UpdateBy = UpdateBy;
        this.CreateAt = CreateAt;
        this.UpdateAt = UpdateAt;
        this.GroupId = GroupId;
    };

    getAllKeys(): string[] {
        return ["Id", "UserName", "PassWord", "FullName", "Avatar", "RoleId", "GroupId", "CreateBy", "UpdateBy", "CreateAt", "UpdateAt"];
    }

    getAllValues(): any {
        return {
            Id: this.Id,
            UserName: this.UserName,
            PassWord: this.PassWord,
            FullName: this.FullName,
            Avatar: this.Avatar,
            RoleId: this.RoleId,
            CreateBy: this.CreateBy,
            UpdateBy: this.UpdateBy,
            CreateAt: this.CreateAt,
            UpdateAt: this.UpdateAt,
            GroupId: this.GroupId,
        }
    }
}