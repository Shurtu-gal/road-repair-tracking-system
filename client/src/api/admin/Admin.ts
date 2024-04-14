import { Mayor } from "../mayor/Mayor";
import { User } from "../user/User";
import { Supervisor } from "../supervisor/Supervisor";
import { Resource } from "../resource/Resource";
import { RepairSchedule } from "../repairSchedule/RepairSchedule";

export type Admin = {
  id: number;
  mayor?: Mayor;
  user?: User;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  supervisors?: Array<Supervisor>;
  resources?: Array<Resource>;
  repairSchedules?: Array<RepairSchedule>;
};
