import { MayorWhereUniqueInput } from "../mayor/MayorWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { SupervisorUpdateManyWithoutAdminsInput } from "./SupervisorUpdateManyWithoutAdminsInput";
import { ResourceUpdateManyWithoutAdminsInput } from "./ResourceUpdateManyWithoutAdminsInput";
import { RepairScheduleUpdateManyWithoutAdminsInput } from "./RepairScheduleUpdateManyWithoutAdminsInput";

export type AdminUpdateInput = {
  mayor?: MayorWhereUniqueInput;
  user?: UserWhereUniqueInput;
  deletedAt?: Date | null;
  supervisors?: SupervisorUpdateManyWithoutAdminsInput;
  resources?: ResourceUpdateManyWithoutAdminsInput;
  repairSchedules?: RepairScheduleUpdateManyWithoutAdminsInput;
};
