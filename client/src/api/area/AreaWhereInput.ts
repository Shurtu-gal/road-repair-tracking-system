import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ResidentListRelationFilter } from "../resident/ResidentListRelationFilter";
import { SupervisorListRelationFilter } from "../supervisor/SupervisorListRelationFilter";
import { ComplaintListRelationFilter } from "../complaint/ComplaintListRelationFilter";
import { RepairListRelationFilter } from "../repair/RepairListRelationFilter";

export type AreaWhereInput = {
  id?: IntFilter;
  name?: StringFilter;
  address?: StringFilter;
  region?: StringFilter;
  country?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
  residents?: ResidentListRelationFilter;
  supervisors?: SupervisorListRelationFilter;
  complaint?: ComplaintListRelationFilter;
  repair?: RepairListRelationFilter;
};
