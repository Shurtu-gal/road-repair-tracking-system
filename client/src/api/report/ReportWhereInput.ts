import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { RepairScheduleWhereUniqueInput } from "../repairSchedule/RepairScheduleWhereUniqueInput";
import { MayorWhereUniqueInput } from "../mayor/MayorWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ComplaintListRelationFilter } from "../complaint/ComplaintListRelationFilter";
import { ResourceListRelationFilter } from "../resource/ResourceListRelationFilter";
import { UpdateListRelationFilter } from "../update/UpdateListRelationFilter";

export type ReportWhereInput = {
  id?: IntFilter;
  time?: DateTimeFilter;
  repairSchedule?: RepairScheduleWhereUniqueInput;
  mayor?: MayorWhereUniqueInput;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
  complaints?: ComplaintListRelationFilter;
  resources?: ResourceListRelationFilter;
  update?: UpdateListRelationFilter;
};
