import { Area } from "../area/Area";
import { User } from "../user/User";
import { Complaint } from "../complaint/Complaint";
import { Update } from "../update/Update";

export type Resident = {
  id: number;
  area?: Area;
  user?: User;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  complaints?: Array<Complaint>;
  updates?: Array<Update>;
};
