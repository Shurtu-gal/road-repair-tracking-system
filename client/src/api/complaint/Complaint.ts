import { Area } from "../area/Area";
import { User } from "../user/User";
import { Resident } from "../resident/Resident";
import { Repair } from "../repair/Repair";
import { Report } from "../report/Report";
import { Update } from "../update/Update";

export type Complaint = {
  id: number;
  road: string;
  description: string;
  subscription: boolean;
  area?: Area;
  user?: User;
  severity?: "Low" | "Medium" | "High";
  status?: "Pending" | "InProgress" | "Completed";
  residents?: Resident | null;
  repair?: Repair | null;
  report?: Report | null;
  update?: Update | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};
