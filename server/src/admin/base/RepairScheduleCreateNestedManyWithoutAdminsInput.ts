
import { InputType, Field } from "@nestjs/graphql";
import { RepairScheduleWhereUniqueInput } from "../../repairSchedule/base/RepairScheduleWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class RepairScheduleCreateNestedManyWithoutAdminsInput {
  @Field(() => [RepairScheduleWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RepairScheduleWhereUniqueInput],
  })
  connect?: Array<RepairScheduleWhereUniqueInput>;
}

export { RepairScheduleCreateNestedManyWithoutAdminsInput as RepairScheduleCreateNestedManyWithoutAdminsInput };
