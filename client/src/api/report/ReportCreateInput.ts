import { RepairScheduleWhereUniqueInput } from "../repairSchedule/RepairScheduleWhereUniqueInput";
import { MayorWhereUniqueInput } from "../mayor/MayorWhereUniqueInput";
import { ComplaintCreateNestedManyWithoutReportsInput } from "./ComplaintCreateNestedManyWithoutReportsInput";
import { ResourceCreateNestedManyWithoutReportsInput } from "./ResourceCreateNestedManyWithoutReportsInput";
import { UpdateCreateNestedManyWithoutReportsInput } from "./UpdateCreateNestedManyWithoutReportsInput";

export type ReportCreateInput = {
  time: Date;
  repairSchedule: RepairScheduleWhereUniqueInput;
  mayor?: MayorWhereUniqueInput | null;
  deletedAt?: Date | null;
  complaints?: ComplaintCreateNestedManyWithoutReportsInput;
  resources?: ResourceCreateNestedManyWithoutReportsInput;
  update?: UpdateCreateNestedManyWithoutReportsInput;
};
