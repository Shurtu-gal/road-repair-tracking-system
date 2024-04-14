import { MayorWhereUniqueInput } from "../mayor/MayorWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { SupervisorCreateNestedManyWithoutAdminsInput } from "./SupervisorCreateNestedManyWithoutAdminsInput";
import { ResourceCreateNestedManyWithoutAdminsInput } from "./ResourceCreateNestedManyWithoutAdminsInput";
import { RepairScheduleCreateNestedManyWithoutAdminsInput } from "./RepairScheduleCreateNestedManyWithoutAdminsInput";

export type AdminCreateInput = {
  mayor: MayorWhereUniqueInput;
  user: UserWhereUniqueInput;
  deletedAt?: Date | null;
  supervisors?: SupervisorCreateNestedManyWithoutAdminsInput;
  resources?: ResourceCreateNestedManyWithoutAdminsInput;
  repairSchedules?: RepairScheduleCreateNestedManyWithoutAdminsInput;
};
