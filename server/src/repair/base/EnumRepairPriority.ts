
import { registerEnumType } from "@nestjs/graphql";

export enum EnumRepairPriority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

registerEnumType(EnumRepairPriority, {
  name: "EnumRepairPriority",
});
