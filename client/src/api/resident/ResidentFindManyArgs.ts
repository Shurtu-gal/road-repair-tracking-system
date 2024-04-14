import { ResidentWhereInput } from "./ResidentWhereInput";
import { ResidentOrderByInput } from "./ResidentOrderByInput";

export type ResidentFindManyArgs = {
  where?: ResidentWhereInput;
  orderBy?: Array<ResidentOrderByInput>;
  skip?: number;
  take?: number;
};
