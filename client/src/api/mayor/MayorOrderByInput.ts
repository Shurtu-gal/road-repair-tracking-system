import { SortOrder } from "../../util/SortOrder";

export type MayorOrderByInput = {
  id?: SortOrder;
  city?: SortOrder;
  userId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  deletedAt?: SortOrder;
};
