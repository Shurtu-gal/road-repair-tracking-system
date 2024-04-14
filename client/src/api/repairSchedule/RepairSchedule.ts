import { Admin } from "../admin/Admin";
import { Supervisor } from "../supervisor/Supervisor";
import { Repair } from "../repair/Repair";
import { Report } from "../report/Report";

export type RepairSchedule = {
  id: number;
  time: Date;
  admin?: Admin | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  supervisors?: Array<Supervisor>;
  repairs?: Array<Repair>;
  report?: Array<Report>;
};
