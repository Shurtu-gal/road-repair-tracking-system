import { RepairScheduleWhereInput } from "./RepairScheduleWhereInput";
import { RepairScheduleOrderByInput } from "./RepairScheduleOrderByInput";

export type RepairScheduleFindManyArgs = {
  where?: RepairScheduleWhereInput;
  orderBy?: Array<RepairScheduleOrderByInput>;
  skip?: number;
  take?: number;
};
