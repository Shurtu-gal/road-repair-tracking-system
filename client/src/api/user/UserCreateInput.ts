import { ResidentWhereUniqueInput } from "../resident/ResidentWhereUniqueInput";
import { SupervisorWhereUniqueInput } from "../supervisor/SupervisorWhereUniqueInput";
import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { MayorWhereUniqueInput } from "../mayor/MayorWhereUniqueInput";
import { ComplaintCreateNestedManyWithoutUsersInput } from "./ComplaintCreateNestedManyWithoutUsersInput";
import { RepairCreateNestedManyWithoutUsersInput } from "./RepairCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  name: string;
  username: string;
  age: number;
  phone?: string | null;
  password: string;
  deletedAt?: Date | null;
  residents?: ResidentWhereUniqueInput | null;
  supervisors?: SupervisorWhereUniqueInput | null;
  admin?: AdminWhereUniqueInput | null;
  mayor?: MayorWhereUniqueInput | null;
  complaint?: ComplaintCreateNestedManyWithoutUsersInput;
  repair?: RepairCreateNestedManyWithoutUsersInput;
  roles?: InputJsonValue;
};
