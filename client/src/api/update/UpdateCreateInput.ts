import { ReportWhereUniqueInput } from "../report/ReportWhereUniqueInput";
import { ResidentWhereUniqueInput } from "../resident/ResidentWhereUniqueInput";
import { ComplaintCreateNestedManyWithoutUpdatesInput } from "./ComplaintCreateNestedManyWithoutUpdatesInput";

export type UpdateCreateInput = {
  time: Date;
  report: ReportWhereUniqueInput;
  residents?: ResidentWhereUniqueInput | null;
  deletedAt?: Date | null;
  complaints?: ComplaintCreateNestedManyWithoutUpdatesInput;
};
