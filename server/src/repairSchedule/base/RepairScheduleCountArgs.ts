
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RepairScheduleWhereInput } from "./RepairScheduleWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class RepairScheduleCountArgs {
  @ApiProperty({
    required: false,
    type: () => RepairScheduleWhereInput,
  })
  @Field(() => RepairScheduleWhereInput, { nullable: true })
  @Type(() => RepairScheduleWhereInput)
  where?: RepairScheduleWhereInput;
}

export { RepairScheduleCountArgs as RepairScheduleCountArgs };
