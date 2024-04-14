
import { registerEnumType } from "@nestjs/graphql";

export enum EnumRepairStatus {
  Pending = "Pending",
  InProgress = "InProgress",
  Completed = "Completed",
}

registerEnumType(EnumRepairStatus, {
  name: "EnumRepairStatus",
});
