import { ReportWhereInput } from "./ReportWhereInput";
import { ReportOrderByInput } from "./ReportOrderByInput";

export type ReportFindManyArgs = {
  where?: ReportWhereInput;
  orderBy?: Array<ReportOrderByInput>;
  skip?: number;
  take?: number;
};
