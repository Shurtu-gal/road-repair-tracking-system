import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ResidentWhereUniqueInput } from "../resident/ResidentWhereUniqueInput";
import { RepairWhereUniqueInput } from "../repair/RepairWhereUniqueInput";
import { ReportWhereUniqueInput } from "../report/ReportWhereUniqueInput";
import { UpdateWhereUniqueInput } from "../update/UpdateWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ComplaintWhereInput = {
  id?: IntFilter;
  road?: StringFilter;
  description?: StringFilter;
  subscription?: BooleanFilter;
  area?: AreaWhereUniqueInput;
  user?: UserWhereUniqueInput;
  severity?: "Low" | "Medium" | "High";
  status?: "Pending" | "InProgress" | "Completed";
  residents?: ResidentWhereUniqueInput;
  repair?: RepairWhereUniqueInput;
  report?: ReportWhereUniqueInput;
  update?: UpdateWhereUniqueInput;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
};
