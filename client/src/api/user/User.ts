import { Resident } from "../resident/Resident";
import { Supervisor } from "../supervisor/Supervisor";
import { Admin } from "../admin/Admin";
import { Mayor } from "../mayor/Mayor";
import { Complaint } from "../complaint/Complaint";
import { Repair } from "../repair/Repair";
import { JsonValue } from "type-fest";

export type User = {
  id: number;
  name: string;
  username: string;
  age: number;
  phone: string | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  residents?: Resident | null;
  supervisors?: Supervisor | null;
  admin?: Admin | null;
  mayor?: Mayor | null;
  complaint?: Array<Complaint>;
  repair?: Array<Repair>;
  roles: JsonValue;
};
