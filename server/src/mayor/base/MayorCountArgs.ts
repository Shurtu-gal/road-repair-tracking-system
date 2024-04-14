
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MayorWhereInput } from "./MayorWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class MayorCountArgs {
  @ApiProperty({
    required: false,
    type: () => MayorWhereInput,
  })
  @Field(() => MayorWhereInput, { nullable: true })
  @Type(() => MayorWhereInput)
  where?: MayorWhereInput;
}

export { MayorCountArgs as MayorCountArgs };
