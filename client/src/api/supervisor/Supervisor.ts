import { Area } from "../area/Area";
import { RepairSchedule } from "../repairSchedule/RepairSchedule";
import { User } from "../user/User";
import { Admin } from "../admin/Admin";
import { Repair } from "../repair/Repair";
import { Resource } from "../resource/Resource";

export type Supervisor = {
  id: number;
  area?: Area;
  repairSchedule?: RepairSchedule | null;
  user?: User;
  admin?: Admin | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  repairs?: Array<Repair>;
  resources?: Array<Resource>;
};
