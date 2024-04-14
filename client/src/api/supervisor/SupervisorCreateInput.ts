import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";
import { RepairScheduleWhereUniqueInput } from "../repairSchedule/RepairScheduleWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { RepairCreateNestedManyWithoutSupervisorsInput } from "./RepairCreateNestedManyWithoutSupervisorsInput";
import { ResourceCreateNestedManyWithoutSupervisorsInput } from "./ResourceCreateNestedManyWithoutSupervisorsInput";

export type SupervisorCreateInput = {
  area: AreaWhereUniqueInput;
  repairSchedule?: RepairScheduleWhereUniqueInput | null;
  user: UserWhereUniqueInput;
  admin?: AdminWhereUniqueInput | null;
  deletedAt?: Date | null;
  repairs?: RepairCreateNestedManyWithoutSupervisorsInput;
  resources?: ResourceCreateNestedManyWithoutSupervisorsInput;
};
