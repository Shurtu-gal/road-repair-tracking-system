import { RepairWhereInput } from "./RepairWhereInput";
import { RepairOrderByInput } from "./RepairOrderByInput";

export type RepairFindManyArgs = {
  where?: RepairWhereInput;
  orderBy?: Array<RepairOrderByInput>;
  skip?: number;
  take?: number;
};
