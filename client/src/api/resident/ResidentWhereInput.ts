import { IntFilter } from "../../util/IntFilter";
import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ComplaintListRelationFilter } from "../complaint/ComplaintListRelationFilter";
import { UpdateListRelationFilter } from "../update/UpdateListRelationFilter";

export type ResidentWhereInput = {
  id?: IntFilter;
  area?: AreaWhereUniqueInput;
  user?: UserWhereUniqueInput;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
  complaints?: ComplaintListRelationFilter;
  updates?: UpdateListRelationFilter;
};
