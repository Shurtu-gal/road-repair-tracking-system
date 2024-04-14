import { IntFilter } from "../../util/IntFilter";
import { MayorWhereUniqueInput } from "../mayor/MayorWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SupervisorListRelationFilter } from "../supervisor/SupervisorListRelationFilter";
import { ResourceListRelationFilter } from "../resource/ResourceListRelationFilter";
import { RepairScheduleListRelationFilter } from "../repairSchedule/RepairScheduleListRelationFilter";

export type AdminWhereInput = {
  id?: IntFilter;
  mayor?: MayorWhereUniqueInput;
  user?: UserWhereUniqueInput;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
  supervisors?: SupervisorListRelationFilter;
  resources?: ResourceListRelationFilter;
  repairSchedules?: RepairScheduleListRelationFilter;
};
