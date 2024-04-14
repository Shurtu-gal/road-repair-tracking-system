import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ResidentWhereUniqueInput } from "../resident/ResidentWhereUniqueInput";
import { RepairWhereUniqueInput } from "../repair/RepairWhereUniqueInput";
import { ReportWhereUniqueInput } from "../report/ReportWhereUniqueInput";
import { UpdateWhereUniqueInput } from "../update/UpdateWhereUniqueInput";

export type ComplaintUpdateInput = {
  road?: string;
  description?: string;
  subscription?: boolean;
  area?: AreaWhereUniqueInput;
  user?: UserWhereUniqueInput;
  severity?: "Low" | "Medium" | "High";
  status?: "Pending" | "InProgress" | "Completed";
  residents?: ResidentWhereUniqueInput | null;
  repair?: RepairWhereUniqueInput | null;
  report?: ReportWhereUniqueInput | null;
  update?: UpdateWhereUniqueInput | null;
  deletedAt?: Date | null;
};
