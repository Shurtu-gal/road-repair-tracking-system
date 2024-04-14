import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AdminUpdateManyWithoutMayorsInput } from "./AdminUpdateManyWithoutMayorsInput";
import { ReportUpdateManyWithoutMayorsInput } from "./ReportUpdateManyWithoutMayorsInput";

export type MayorUpdateInput = {
  city?: string;
  user?: UserWhereUniqueInput;
  deletedAt?: Date | null;
  admin?: AdminUpdateManyWithoutMayorsInput;
  reports?: ReportUpdateManyWithoutMayorsInput;
};
