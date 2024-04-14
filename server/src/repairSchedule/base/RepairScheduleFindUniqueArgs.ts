
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RepairScheduleWhereUniqueInput } from "./RepairScheduleWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class RepairScheduleFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => RepairScheduleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RepairScheduleWhereUniqueInput)
  @Field(() => RepairScheduleWhereUniqueInput, { nullable: false })
  where!: RepairScheduleWhereUniqueInput;
}

export { RepairScheduleFindUniqueArgs as RepairScheduleFindUniqueArgs };
