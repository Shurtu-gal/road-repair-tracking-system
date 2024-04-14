
import { registerEnumType } from "@nestjs/graphql";

export enum EnumComplaintStatus {
  Pending = "Pending",
  InProgress = "InProgress",
  Completed = "Completed",
}

registerEnumType(EnumComplaintStatus, {
  name: "EnumComplaintStatus",
});
