import { ResidentUpdateManyWithoutAreasInput } from "./ResidentUpdateManyWithoutAreasInput";
import { SupervisorUpdateManyWithoutAreasInput } from "./SupervisorUpdateManyWithoutAreasInput";
import { ComplaintUpdateManyWithoutAreasInput } from "./ComplaintUpdateManyWithoutAreasInput";
import { RepairUpdateManyWithoutAreasInput } from "./RepairUpdateManyWithoutAreasInput";

export type AreaUpdateInput = {
  name?: string;
  address?: string;
  region?: string;
  country?: string;
  deletedAt?: Date | null;
  residents?: ResidentUpdateManyWithoutAreasInput;
  supervisors?: SupervisorUpdateManyWithoutAreasInput;
  complaint?: ComplaintUpdateManyWithoutAreasInput;
  repair?: RepairUpdateManyWithoutAreasInput;
};
