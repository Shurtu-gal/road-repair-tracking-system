
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AdminWhereInput } from "./AdminWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class AdminCountArgs {
  @ApiProperty({
    required: false,
    type: () => AdminWhereInput,
  })
  @Field(() => AdminWhereInput, { nullable: true })
  @Type(() => AdminWhereInput)
  where?: AdminWhereInput;
}

export { AdminCountArgs as AdminCountArgs };
