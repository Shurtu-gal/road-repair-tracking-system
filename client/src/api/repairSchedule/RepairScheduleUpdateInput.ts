import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { SupervisorUpdateManyWithoutRepairSchedulesInput } from "./SupervisorUpdateManyWithoutRepairSchedulesInput";
import { RepairUpdateManyWithoutRepairSchedulesInput } from "./RepairUpdateManyWithoutRepairSchedulesInput";
import { ReportUpdateManyWithoutRepairSchedulesInput } from "./ReportUpdateManyWithoutRepairSchedulesInput";

export type RepairScheduleUpdateInput = {
  time?: Date;
  admin?: AdminWhereUniqueInput | null;
  deletedAt?: Date | null;
  supervisors?: SupervisorUpdateManyWithoutRepairSchedulesInput;
  repairs?: RepairUpdateManyWithoutRepairSchedulesInput;
  report?: ReportUpdateManyWithoutRepairSchedulesInput;
};
