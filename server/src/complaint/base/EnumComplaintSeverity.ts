
import { registerEnumType } from "@nestjs/graphql";

export enum EnumComplaintSeverity {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

registerEnumType(EnumComplaintSeverity, {
  name: "EnumComplaintSeverity",
});
