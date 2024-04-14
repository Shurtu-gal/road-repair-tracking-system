import { SortOrder } from "../../util/SortOrder";

export type AreaOrderByInput = {
  id?: SortOrder;
  name?: SortOrder;
  address?: SortOrder;
  region?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  deletedAt?: SortOrder;
};
