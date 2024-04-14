import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SupervisorListRelationFilter } from "../supervisor/SupervisorListRelationFilter";
import { RepairListRelationFilter } from "../repair/RepairListRelationFilter";
import { ReportListRelationFilter } from "../report/ReportListRelationFilter";

export type RepairScheduleWhereInput = {
  id?: IntFilter;
  time?: DateTimeFilter;
  admin?: AdminWhereUniqueInput;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
  supervisors?: SupervisorListRelationFilter;
  repairs?: RepairListRelationFilter;
  report?: ReportListRelationFilter;
};
