import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  id?: SortOrder;
  name?: SortOrder;
  username?: SortOrder;
  age?: SortOrder;
  phone?: SortOrder;
  password?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  deletedAt?: SortOrder;
  residentsId?: SortOrder;
  supervisorsId?: SortOrder;
  adminId?: SortOrder;
  mayorId?: SortOrder;
  roles?: SortOrder;
};
