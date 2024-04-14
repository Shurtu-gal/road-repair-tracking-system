import { ResidentWhereUniqueInput } from "../resident/ResidentWhereUniqueInput";
import { SupervisorWhereUniqueInput } from "../supervisor/SupervisorWhereUniqueInput";
import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { MayorWhereUniqueInput } from "../mayor/MayorWhereUniqueInput";
import { ComplaintUpdateManyWithoutUsersInput } from "./ComplaintUpdateManyWithoutUsersInput";
import { RepairUpdateManyWithoutUsersInput } from "./RepairUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  name?: string;
  username?: string;
  age?: number;
  phone?: string | null;
  password?: string;
  deletedAt?: Date | null;
  residents?: ResidentWhereUniqueInput | null;
  supervisors?: SupervisorWhereUniqueInput | null;
  admin?: AdminWhereUniqueInput | null;
  mayor?: MayorWhereUniqueInput | null;
  complaint?: ComplaintUpdateManyWithoutUsersInput;
  repair?: RepairUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
};
