import { ResourceWhereInput } from "./ResourceWhereInput";

export type ResourceListRelationFilter = {
  every?: ResourceWhereInput;
  some?: ResourceWhereInput;
  none?: ResourceWhereInput;
};
