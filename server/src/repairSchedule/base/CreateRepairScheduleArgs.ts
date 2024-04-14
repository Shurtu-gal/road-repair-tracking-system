
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RepairScheduleCreateInput } from "./RepairScheduleCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateRepairScheduleArgs {
  @ApiProperty({
    required: true,
    type: () => RepairScheduleCreateInput,
  })
  @ValidateNested()
  @Type(() => RepairScheduleCreateInput)
  @Field(() => RepairScheduleCreateInput, { nullable: false })
  data!: RepairScheduleCreateInput;
}

export { CreateRepairScheduleArgs as CreateRepairScheduleArgs };
