import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { RepairWhereUniqueInput } from "../repair/RepairWhereUniqueInput";
import { SupervisorWhereUniqueInput } from "../supervisor/SupervisorWhereUniqueInput";
import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { ReportWhereUniqueInput } from "../report/ReportWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ResourceWhereInput = {
  id?: IntFilter;
  name?: StringFilter;
  quantity?: IntFilter;
  allocation?: RepairWhereUniqueInput;
  price?: IntFilter;
  supervisors?: SupervisorWhereUniqueInput;
  admin?: AdminWhereUniqueInput;
  report?: ReportWhereUniqueInput;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
};
