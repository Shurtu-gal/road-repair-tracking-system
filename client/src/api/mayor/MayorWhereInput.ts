import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { AdminListRelationFilter } from "../admin/AdminListRelationFilter";
import { ReportListRelationFilter } from "../report/ReportListRelationFilter";

export type MayorWhereInput = {
  id?: IntFilter;
  city?: StringFilter;
  user?: UserWhereUniqueInput;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
  admin?: AdminListRelationFilter;
  reports?: ReportListRelationFilter;
};
