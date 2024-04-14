import { Repair } from "../repair/Repair";
import { Supervisor } from "../supervisor/Supervisor";
import { Admin } from "../admin/Admin";
import { Report } from "../report/Report";

export type Resource = {
  id: number;
  name: string;
  quantity: number;
  allocation?: Repair;
  price: number;
  supervisors?: Supervisor | null;
  admin?: Admin | null;
  report?: Report | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};
