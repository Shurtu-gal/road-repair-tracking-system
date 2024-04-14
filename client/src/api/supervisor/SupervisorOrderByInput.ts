import { SortOrder } from "../../util/SortOrder";

export type SupervisorOrderByInput = {
  id?: SortOrder;
  areaId?: SortOrder;
  repairScheduleId?: SortOrder;
  userId?: SortOrder;
  AdminId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  deletedAt?: SortOrder;
};
