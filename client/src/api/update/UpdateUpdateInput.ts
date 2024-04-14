import { ReportWhereUniqueInput } from "../report/ReportWhereUniqueInput";
import { ResidentWhereUniqueInput } from "../resident/ResidentWhereUniqueInput";
import { ComplaintUpdateManyWithoutUpdatesInput } from "./ComplaintUpdateManyWithoutUpdatesInput";

export type UpdateUpdateInput = {
  time?: Date;
  report?: ReportWhereUniqueInput;
  residents?: ResidentWhereUniqueInput | null;
  deletedAt?: Date | null;
  complaints?: ComplaintUpdateManyWithoutUpdatesInput;
};
