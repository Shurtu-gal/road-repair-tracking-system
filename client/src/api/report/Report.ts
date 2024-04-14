import { RepairSchedule } from "../repairSchedule/RepairSchedule";
import { Mayor } from "../mayor/Mayor";
import { Complaint } from "../complaint/Complaint";
import { Resource } from "../resource/Resource";
import { Update } from "../update/Update";

export type Report = {
  id: number;
  time: Date;
  repairSchedule?: RepairSchedule;
  mayor?: Mayor | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  complaints?: Array<Complaint>;
  resources?: Array<Resource>;
  update?: Array<Update>;
};
