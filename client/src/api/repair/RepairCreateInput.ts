import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";
import { SupervisorWhereUniqueInput } from "../supervisor/SupervisorWhereUniqueInput";
import { RepairScheduleWhereUniqueInput } from "../repairSchedule/RepairScheduleWhereUniqueInput";
import { ComplaintCreateNestedManyWithoutRepairsInput } from "./ComplaintCreateNestedManyWithoutRepairsInput";
import { ResourceCreateNestedManyWithoutRepairsInput } from "./ResourceCreateNestedManyWithoutRepairsInput";

export type RepairCreateInput = {
  status: "Pending" | "InProgress" | "Completed";
  priority: "Low" | "Medium" | "High";
  assignedTo: UserWhereUniqueInput;
  area: AreaWhereUniqueInput;
  supervisors?: SupervisorWhereUniqueInput | null;
  repairSchedule?: RepairScheduleWhereUniqueInput | null;
  deletedAt?: Date | null;
  complaints?: ComplaintCreateNestedManyWithoutRepairsInput;
  resources?: ResourceCreateNestedManyWithoutRepairsInput;
};
