
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MayorCreateInput } from "./MayorCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateMayorArgs {
  @ApiProperty({
    required: true,
    type: () => MayorCreateInput,
  })
  @ValidateNested()
  @Type(() => MayorCreateInput)
  @Field(() => MayorCreateInput, { nullable: false })
  data!: MayorCreateInput;
}

export { CreateMayorArgs as CreateMayorArgs };
