import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { SupervisorCreateNestedManyWithoutRepairSchedulesInput } from "./SupervisorCreateNestedManyWithoutRepairSchedulesInput";
import { RepairCreateNestedManyWithoutRepairSchedulesInput } from "./RepairCreateNestedManyWithoutRepairSchedulesInput";
import { ReportCreateNestedManyWithoutRepairSchedulesInput } from "./ReportCreateNestedManyWithoutRepairSchedulesInput";

export type RepairScheduleCreateInput = {
  time: Date;
  admin?: AdminWhereUniqueInput | null;
  deletedAt?: Date | null;
  supervisors?: SupervisorCreateNestedManyWithoutRepairSchedulesInput;
  repairs?: RepairCreateNestedManyWithoutRepairSchedulesInput;
  report?: ReportCreateNestedManyWithoutRepairSchedulesInput;
};
