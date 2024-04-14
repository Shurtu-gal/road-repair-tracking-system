import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AdminCreateNestedManyWithoutMayorsInput } from "./AdminCreateNestedManyWithoutMayorsInput";
import { ReportCreateNestedManyWithoutMayorsInput } from "./ReportCreateNestedManyWithoutMayorsInput";

export type MayorCreateInput = {
  city: string;
  user: UserWhereUniqueInput;
  deletedAt?: Date | null;
  admin?: AdminCreateNestedManyWithoutMayorsInput;
  reports?: ReportCreateNestedManyWithoutMayorsInput;
};
