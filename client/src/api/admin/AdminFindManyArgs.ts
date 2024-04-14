import { AdminWhereInput } from "./AdminWhereInput";
import { AdminOrderByInput } from "./AdminOrderByInput";

export type AdminFindManyArgs = {
  where?: AdminWhereInput;
  orderBy?: Array<AdminOrderByInput>;
  skip?: number;
  take?: number;
};
