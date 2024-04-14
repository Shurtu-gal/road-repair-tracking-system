import { SortOrder } from "../../util/SortOrder";

export type AdminOrderByInput = {
  id?: SortOrder;
  mayorId?: SortOrder;
  userId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  deletedAt?: SortOrder;
};
