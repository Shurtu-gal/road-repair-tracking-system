import { UpdateWhereInput } from "./UpdateWhereInput";
import { UpdateOrderByInput } from "./UpdateOrderByInput";

export type UpdateFindManyArgs = {
  where?: UpdateWhereInput;
  orderBy?: Array<UpdateOrderByInput>;
  skip?: number;
  take?: number;
};
