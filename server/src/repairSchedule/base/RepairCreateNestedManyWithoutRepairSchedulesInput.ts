
import { InputType, Field } from "@nestjs/graphql";
import { RepairWhereUniqueInput } from "../../repair/base/RepairWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class RepairCreateNestedManyWithoutRepairSchedulesInput {
  @Field(() => [RepairWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RepairWhereUniqueInput],
  })
  connect?: Array<RepairWhereUniqueInput>;
}

export { RepairCreateNestedManyWithoutRepairSchedulesInput as RepairCreateNestedManyWithoutRepairSchedulesInput };
