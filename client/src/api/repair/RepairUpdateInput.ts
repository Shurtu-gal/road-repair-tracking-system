import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";
import { SupervisorWhereUniqueInput } from "../supervisor/SupervisorWhereUniqueInput";
import { RepairScheduleWhereUniqueInput } from "../repairSchedule/RepairScheduleWhereUniqueInput";
import { ComplaintUpdateManyWithoutRepairsInput } from "./ComplaintUpdateManyWithoutRepairsInput";
import { ResourceUpdateManyWithoutRepairsInput } from "./ResourceUpdateManyWithoutRepairsInput";

export type RepairUpdateInput = {
  status?: "Pending" | "InProgress" | "Completed";
  priority?: "Low" | "Medium" | "High";
  assignedTo?: UserWhereUniqueInput;
  area?: AreaWhereUniqueInput;
  supervisors?: SupervisorWhereUniqueInput | null;
  repairSchedule?: RepairScheduleWhereUniqueInput | null;
  deletedAt?: Date | null;
  complaints?: ComplaintUpdateManyWithoutRepairsInput;
  resources?: ResourceUpdateManyWithoutRepairsInput;
};
