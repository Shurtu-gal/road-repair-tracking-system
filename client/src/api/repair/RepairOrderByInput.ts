import { SortOrder } from "../../util/SortOrder";

export type RepairOrderByInput = {
  id?: SortOrder;
  status?: SortOrder;
  priority?: SortOrder;
  assignedToId?: SortOrder;
  areaId?: SortOrder;
  supervisorsId?: SortOrder;
  repairScheduleId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  deletedAt?: SortOrder;
};
