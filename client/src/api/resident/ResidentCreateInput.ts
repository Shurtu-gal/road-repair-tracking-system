import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ComplaintCreateNestedManyWithoutResidentsInput } from "./ComplaintCreateNestedManyWithoutResidentsInput";
import { UpdateCreateNestedManyWithoutResidentsInput } from "./UpdateCreateNestedManyWithoutResidentsInput";

export type ResidentCreateInput = {
  area: AreaWhereUniqueInput;
  user: UserWhereUniqueInput;
  deletedAt?: Date | null;
  complaints?: ComplaintCreateNestedManyWithoutResidentsInput;
  updates?: UpdateCreateNestedManyWithoutResidentsInput;
};
