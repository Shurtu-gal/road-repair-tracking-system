
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RepairScheduleWhereUniqueInput } from "./RepairScheduleWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { RepairScheduleUpdateInput } from "./RepairScheduleUpdateInput";

@ArgsType()
class UpdateRepairScheduleArgs {
  @ApiProperty({
    required: true,
    type: () => RepairScheduleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RepairScheduleWhereUniqueInput)
  @Field(() => RepairScheduleWhereUniqueInput, { nullable: false })
  where!: RepairScheduleWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => RepairScheduleUpdateInput,
  })
  @ValidateNested()
  @Type(() => RepairScheduleUpdateInput)
  @Field(() => RepairScheduleUpdateInput, { nullable: false })
  data!: RepairScheduleUpdateInput;
}

export { UpdateRepairScheduleArgs as UpdateRepairScheduleArgs };
