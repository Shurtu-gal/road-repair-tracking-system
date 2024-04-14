import { Resident } from "../resident/Resident";
import { Supervisor } from "../supervisor/Supervisor";
import { Complaint } from "../complaint/Complaint";
import { Repair } from "../repair/Repair";

export type Area = {
  id: number;
  name: string;
  address: string;
  region: string;
  country: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  residents?: Array<Resident>;
  supervisors?: Array<Supervisor>;
  complaint?: Array<Complaint>;
  repair?: Array<Repair>;
};
