
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SupervisorWhereUniqueInput } from "./SupervisorWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SupervisorUpdateInput } from "./SupervisorUpdateInput";

@ArgsType()
class UpdateSupervisorArgs {
  @ApiProperty({
    required: true,
    type: () => SupervisorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SupervisorWhereUniqueInput)
  @Field(() => SupervisorWhereUniqueInput, { nullable: false })
  where!: SupervisorWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SupervisorUpdateInput,
  })
  @ValidateNested()
  @Type(() => SupervisorUpdateInput)
  @Field(() => SupervisorUpdateInput, { nullable: false })
  data!: SupervisorUpdateInput;
}

export { UpdateSupervisorArgs as UpdateSupervisorArgs };
