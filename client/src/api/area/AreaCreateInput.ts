import { ResidentCreateNestedManyWithoutAreasInput } from "./ResidentCreateNestedManyWithoutAreasInput";
import { SupervisorCreateNestedManyWithoutAreasInput } from "./SupervisorCreateNestedManyWithoutAreasInput";
import { ComplaintCreateNestedManyWithoutAreasInput } from "./ComplaintCreateNestedManyWithoutAreasInput";
import { RepairCreateNestedManyWithoutAreasInput } from "./RepairCreateNestedManyWithoutAreasInput";

export type AreaCreateInput = {
  name: string;
  address: string;
  region: string;
  country: string;
  deletedAt?: Date | null;
  residents?: ResidentCreateNestedManyWithoutAreasInput;
  supervisors?: SupervisorCreateNestedManyWithoutAreasInput;
  complaint?: ComplaintCreateNestedManyWithoutAreasInput;
  repair?: RepairCreateNestedManyWithoutAreasInput;
};
