
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UpdateWhereInput } from "./UpdateWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class UpdateCountArgs {
  @ApiProperty({
    required: false,
    type: () => UpdateWhereInput,
  })
  @Field(() => UpdateWhereInput, { nullable: true })
  @Type(() => UpdateWhereInput)
  where?: UpdateWhereInput;
}

export { UpdateCountArgs as UpdateCountArgs };
