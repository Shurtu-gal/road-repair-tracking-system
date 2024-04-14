import { RepairWhereUniqueInput } from "../repair/RepairWhereUniqueInput";
import { SupervisorWhereUniqueInput } from "../supervisor/SupervisorWhereUniqueInput";
import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { ReportWhereUniqueInput } from "../report/ReportWhereUniqueInput";

export type ResourceUpdateInput = {
  name?: string;
  quantity?: number;
  allocation?: RepairWhereUniqueInput;
  price?: number;
  supervisors?: SupervisorWhereUniqueInput | null;
  admin?: AdminWhereUniqueInput | null;
  report?: ReportWhereUniqueInput | null;
  deletedAt?: Date | null;
};
