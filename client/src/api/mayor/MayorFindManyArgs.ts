import { MayorWhereInput } from "./MayorWhereInput";
import { MayorOrderByInput } from "./MayorOrderByInput";

export type MayorFindManyArgs = {
  where?: MayorWhereInput;
  orderBy?: Array<MayorOrderByInput>;
  skip?: number;
  take?: number;
};
