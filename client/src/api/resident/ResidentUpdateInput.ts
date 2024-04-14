import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ComplaintUpdateManyWithoutResidentsInput } from "./ComplaintUpdateManyWithoutResidentsInput";
import { UpdateUpdateManyWithoutResidentsInput } from "./UpdateUpdateManyWithoutResidentsInput";

export type ResidentUpdateInput = {
  area?: AreaWhereUniqueInput;
  user?: UserWhereUniqueInput;
  deletedAt?: Date | null;
  complaints?: ComplaintUpdateManyWithoutResidentsInput;
  updates?: UpdateUpdateManyWithoutResidentsInput;
};
