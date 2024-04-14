import { User } from "../user/User";
import { Area } from "../area/Area";
import { Supervisor } from "../supervisor/Supervisor";
import { RepairSchedule } from "../repairSchedule/RepairSchedule";
import { Complaint } from "../complaint/Complaint";
import { Resource } from "../resource/Resource";

export type Repair = {
  id: number;
  status?: "Pending" | "InProgress" | "Completed";
  priority?: "Low" | "Medium" | "High";
  assignedTo?: User;
  area?: Area;
  supervisors?: Supervisor | null;
  repairSchedule?: RepairSchedule | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  complaints?: Array<Complaint>;
  resources?: Array<Resource>;
};
