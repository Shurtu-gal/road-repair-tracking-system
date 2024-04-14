import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ResidentWhereUniqueInput } from "../resident/ResidentWhereUniqueInput";
import { SupervisorWhereUniqueInput } from "../supervisor/SupervisorWhereUniqueInput";
import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { MayorWhereUniqueInput } from "../mayor/MayorWhereUniqueInput";
import { ComplaintListRelationFilter } from "../complaint/ComplaintListRelationFilter";
import { RepairListRelationFilter } from "../repair/RepairListRelationFilter";

export type UserWhereInput = {
  id?: IntFilter;
  name?: StringFilter;
  username?: StringFilter;
  age?: IntFilter;
  phone?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
  residents?: ResidentWhereUniqueInput;
  supervisors?: SupervisorWhereUniqueInput;
  admin?: AdminWhereUniqueInput;
  mayor?: MayorWhereUniqueInput;
  complaint?: ComplaintListRelationFilter;
  repair?: RepairListRelationFilter;
};
