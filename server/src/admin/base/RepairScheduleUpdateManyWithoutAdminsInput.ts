
import { InputType, Field } from "@nestjs/graphql";
import { RepairScheduleWhereUniqueInput } from "../../repairSchedule/base/RepairScheduleWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class RepairScheduleUpdateManyWithoutAdminsInput {
  @Field(() => [RepairScheduleWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RepairScheduleWhereUniqueInput],
  })
  connect?: Array<RepairScheduleWhereUniqueInput>;

  @Field(() => [RepairScheduleWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RepairScheduleWhereUniqueInput],
  })
  disconnect?: Array<RepairScheduleWhereUniqueInput>;

  @Field(() => [RepairScheduleWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RepairScheduleWhereUniqueInput],
  })
  set?: Array<RepairScheduleWhereUniqueInput>;
}

export { RepairScheduleUpdateManyWithoutAdminsInput as RepairScheduleUpdateManyWithoutAdminsInput };
