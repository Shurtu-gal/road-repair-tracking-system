import { SortOrder } from "../../util/SortOrder";

export type ResidentOrderByInput = {
  id?: SortOrder;
  areaId?: SortOrder;
  userId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  deletedAt?: SortOrder;
};
