import { RepairScheduleWhereUniqueInput } from "../repairSchedule/RepairScheduleWhereUniqueInput";
import { MayorWhereUniqueInput } from "../mayor/MayorWhereUniqueInput";
import { ComplaintUpdateManyWithoutReportsInput } from "./ComplaintUpdateManyWithoutReportsInput";
import { ResourceUpdateManyWithoutReportsInput } from "./ResourceUpdateManyWithoutReportsInput";
import { UpdateUpdateManyWithoutReportsInput } from "./UpdateUpdateManyWithoutReportsInput";

export type ReportUpdateInput = {
  time?: Date;
  repairSchedule?: RepairScheduleWhereUniqueInput;
  mayor?: MayorWhereUniqueInput | null;
  deletedAt?: Date | null;
  complaints?: ComplaintUpdateManyWithoutReportsInput;
  resources?: ResourceUpdateManyWithoutReportsInput;
  update?: UpdateUpdateManyWithoutReportsInput;
};
