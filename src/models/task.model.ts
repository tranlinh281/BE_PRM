export class Task {
    public Id: string;
    public Name: string;
    public Process?: string;
    public ContentOfTask?: string;
    public ContentOfProcessingTask?: string;
    public Description?: string;
    public Mark?: number;
    public CommentedTime?: string;
    public StartTime?: Date;
    public EndTime?: Date;
    public Status?: string;
    public UserId?: string;
    public GroupId?: string;
    public SloveBy?: string;
    public UploadFile?: string;
    public CreateBy?: string;
    public UpdateBy?: string;
    public CreateAt?: Date;
    public UpdateAt?: Date;

    constructor({ Id, Name, Process, ContentOfTask, ContentOfProcessingTask, Description,
        Mark, CommentedTime, StartTime, EndTime, Status, UserId, GroupId, SloveBy,
        UploadFile, CreateBy, UpdateBy, CreateAt, UpdateAt }:
        {
            Id: string, Name: string, Process?: string, ContentOfTask?: string; ContentOfProcessingTask?: string;
            Description?: string; Mark?: number; CommentedTime?: string; StartTime?: Date; EndTime?: Date;
            Status?: string; UserId?: string; GroupId?: string; SloveBy?: string; UploadFile?: string;
            CreateBy?: string, UpdateBy?: string, CreateAt?: Date, UpdateAt?: Date
        }) {
        this.Id = Id;
        this.Name = Name;
        this.Process = Process;
        this.ContentOfTask = ContentOfTask;
        this.ContentOfProcessingTask = ContentOfProcessingTask;
        this.Description = Description;
        this.Mark = Mark;
        this.CommentedTime = CommentedTime;
        this.StartTime = StartTime;
        this.EndTime = EndTime;
        this.Status = Status;
        this.UserId = UserId;
        this.GroupId = GroupId;
        this.SloveBy = SloveBy;
        this.UploadFile = UploadFile;
        this.CreateBy = CreateBy;
        this.UpdateBy = UpdateBy;
        this.CreateAt = CreateAt;
        this.UpdateAt = UpdateAt;
    };

    getAllKeys(): string[] {
        return ["Id", "Name", "Process", "ContentOfTask", "ContentOfProcessingTask", "Description",
            "Mark", "CommentedTime", "StartTime", "EndTime", "Status", "UserId", "GroupId", "SloveBy",
            "UploadFile", "CreateBy", "UpdateBy", "CreateAt", "UpdateAt"];
    }

    getAllValues(): any {
        return {
            Id: this.Id,
            Name: this.Name,
            Process: this.Process,
            ContentOfTask: this.ContentOfTask,
            ContentOfProcessingTask: this.ContentOfProcessingTask,
            Description: this.Description,
            Mark: this.Mark,
            CommentedTime: this.CommentedTime,
            StartTime: this.StartTime,
            EndTime: this.EndTime,
            Status: this.Status,
            UserId: this.UserId,
            GroupId: this.GroupId,
            SloveBy: this.SloveBy,
            UploadFile: this.UploadFile,
            CreateBy: this.CreateBy,
            UpdateBy: this.UpdateBy,
            CreateAt: this.CreateAt,
            UpdateAt: this.UpdateAt,
        }
    }
}