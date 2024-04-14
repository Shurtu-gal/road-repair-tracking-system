import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";
import { RepairScheduleWhereUniqueInput } from "../repairSchedule/RepairScheduleWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { RepairUpdateManyWithoutSupervisorsInput } from "./RepairUpdateManyWithoutSupervisorsInput";
import { ResourceUpdateManyWithoutSupervisorsInput } from "./ResourceUpdateManyWithoutSupervisorsInput";

export type SupervisorUpdateInput = {
  area?: AreaWhereUniqueInput;
  repairSchedule?: RepairScheduleWhereUniqueInput | null;
  user?: UserWhereUniqueInput;
  admin?: AdminWhereUniqueInput | null;
  deletedAt?: Date | null;
  repairs?: RepairUpdateManyWithoutSupervisorsInput;
  resources?: ResourceUpdateManyWithoutSupervisorsInput;
};
