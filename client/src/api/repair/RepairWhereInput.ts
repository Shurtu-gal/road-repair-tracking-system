import { IntFilter } from "../../util/IntFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";
import { SupervisorWhereUniqueInput } from "../supervisor/SupervisorWhereUniqueInput";
import { RepairScheduleWhereUniqueInput } from "../repairSchedule/RepairScheduleWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ComplaintListRelationFilter } from "../complaint/ComplaintListRelationFilter";
import { ResourceListRelationFilter } from "../resource/ResourceListRelationFilter";

export type RepairWhereInput = {
  id?: IntFilter;
  status?: "Pending" | "InProgress" | "Completed";
  priority?: "Low" | "Medium" | "High";
  assignedTo?: UserWhereUniqueInput;
  area?: AreaWhereUniqueInput;
  supervisors?: SupervisorWhereUniqueInput;
  repairSchedule?: RepairScheduleWhereUniqueInput;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
  complaints?: ComplaintListRelationFilter;
  resources?: ResourceListRelationFilter;
};
