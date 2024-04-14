
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SupervisorCreateInput } from "./SupervisorCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateSupervisorArgs {
  @ApiProperty({
    required: true,
    type: () => SupervisorCreateInput,
  })
  @ValidateNested()
  @Type(() => SupervisorCreateInput)
  @Field(() => SupervisorCreateInput, { nullable: false })
  data!: SupervisorCreateInput;
}

export { CreateSupervisorArgs as CreateSupervisorArgs };
