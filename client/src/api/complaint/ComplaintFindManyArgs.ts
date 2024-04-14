import { ComplaintWhereInput } from "./ComplaintWhereInput";
import { ComplaintOrderByInput } from "./ComplaintOrderByInput";

export type ComplaintFindManyArgs = {
  where?: ComplaintWhereInput;
  orderBy?: Array<ComplaintOrderByInput>;
  skip?: number;
  take?: number;
};
