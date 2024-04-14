import { ResourceWhereInput } from "./ResourceWhereInput";
import { ResourceOrderByInput } from "./ResourceOrderByInput";

export type ResourceFindManyArgs = {
  where?: ResourceWhereInput;
  orderBy?: Array<ResourceOrderByInput>;
  skip?: number;
  take?: number;
};
