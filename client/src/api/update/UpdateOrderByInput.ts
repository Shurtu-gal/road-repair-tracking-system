import { SortOrder } from "../../util/SortOrder";

export type UpdateOrderByInput = {
  id?: SortOrder;
  time?: SortOrder;
  reportId?: SortOrder;
  residentsId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  deletedAt?: SortOrder;
};
