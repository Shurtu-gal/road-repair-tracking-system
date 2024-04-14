
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AreaWhereInput } from "./AreaWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class AreaCountArgs {
  @ApiProperty({
    required: false,
    type: () => AreaWhereInput,
  })
  @Field(() => AreaWhereInput, { nullable: true })
  @Type(() => AreaWhereInput)
  where?: AreaWhereInput;
}

export { AreaCountArgs as AreaCountArgs };
