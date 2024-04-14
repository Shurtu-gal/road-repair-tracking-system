import { SortOrder } from "../../util/SortOrder";

export type ComplaintOrderByInput = {
  id?: SortOrder;
  road?: SortOrder;
  description?: SortOrder;
  subscription?: SortOrder;
  areaId?: SortOrder;
  userId?: SortOrder;
  severity?: SortOrder;
  status?: SortOrder;
  residentsId?: SortOrder;
  repairId?: SortOrder;
  reportId?: SortOrder;
  updateId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  deletedAt?: SortOrder;
};
