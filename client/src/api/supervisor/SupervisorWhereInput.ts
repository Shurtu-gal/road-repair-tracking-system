import { IntFilter } from "../../util/IntFilter";
import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";
import { RepairScheduleWhereUniqueInput } from "../repairSchedule/RepairScheduleWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { RepairListRelationFilter } from "../repair/RepairListRelationFilter";
import { ResourceListRelationFilter } from "../resource/ResourceListRelationFilter";

export type SupervisorWhereInput = {
  id?: IntFilter;
  area?: AreaWhereUniqueInput;
  repairSchedule?: RepairScheduleWhereUniqueInput;
  user?: UserWhereUniqueInput;
  admin?: AdminWhereUniqueInput;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
  repairs?: RepairListRelationFilter;
  resources?: ResourceListRelationFilter;
};
