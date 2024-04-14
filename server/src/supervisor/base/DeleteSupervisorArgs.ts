
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SupervisorWhereUniqueInput } from "./SupervisorWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteSupervisorArgs {
  @ApiProperty({
    required: true,
    type: () => SupervisorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SupervisorWhereUniqueInput)
  @Field(() => SupervisorWhereUniqueInput, { nullable: false })
  where!: SupervisorWhereUniqueInput;
}

export { DeleteSupervisorArgs as DeleteSupervisorArgs };
