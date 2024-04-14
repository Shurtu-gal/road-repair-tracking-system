import { ResourceWhereUniqueInput } from "./ResourceWhereUniqueInput";
import { ResourceUpdateInput } from "./ResourceUpdateInput";

export type UpdateResourceArgs = {
  where: ResourceWhereUniqueInput;
  data: ResourceUpdateInput;
};
