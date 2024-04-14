
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SupervisorWhereInput } from "./SupervisorWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class SupervisorCountArgs {
  @ApiProperty({
    required: false,
    type: () => SupervisorWhereInput,
  })
  @Field(() => SupervisorWhereInput, { nullable: true })
  @Type(() => SupervisorWhereInput)
  where?: SupervisorWhereInput;
}

export { SupervisorCountArgs as SupervisorCountArgs };
