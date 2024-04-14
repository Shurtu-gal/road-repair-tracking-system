import { SupervisorWhereInput } from "./SupervisorWhereInput";
import { SupervisorOrderByInput } from "./SupervisorOrderByInput";

export type SupervisorFindManyArgs = {
  where?: SupervisorWhereInput;
  orderBy?: Array<SupervisorOrderByInput>;
  skip?: number;
  take?: number;
};
