import { SortOrder } from "../../util/SortOrder";

export type RepairScheduleOrderByInput = {
  id?: SortOrder;
  time?: SortOrder;
  AdminId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  deletedAt?: SortOrder;
};
