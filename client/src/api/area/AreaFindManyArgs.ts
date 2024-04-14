import { AreaWhereInput } from "./AreaWhereInput";
import { AreaOrderByInput } from "./AreaOrderByInput";

export type AreaFindManyArgs = {
  where?: AreaWhereInput;
  orderBy?: Array<AreaOrderByInput>;
  skip?: number;
  take?: number;
};
