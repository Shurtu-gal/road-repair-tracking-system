
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UpdateWhereUniqueInput } from "./UpdateWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UpdateUpdateInput } from "./UpdateUpdateInput";

@ArgsType()
class UpdateUpdateArgs {
  @ApiProperty({
    required: true,
    type: () => UpdateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UpdateWhereUniqueInput)
  @Field(() => UpdateWhereUniqueInput, { nullable: false })
  where!: UpdateWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => UpdateUpdateInput,
  })
  @ValidateNested()
  @Type(() => UpdateUpdateInput)
  @Field(() => UpdateUpdateInput, { nullable: false })
  data!: UpdateUpdateInput;
}

export { UpdateUpdateArgs as UpdateUpdateArgs };
