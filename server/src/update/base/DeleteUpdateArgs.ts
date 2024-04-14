
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UpdateWhereUniqueInput } from "./UpdateWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteUpdateArgs {
  @ApiProperty({
    required: true,
    type: () => UpdateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UpdateWhereUniqueInput)
  @Field(() => UpdateWhereUniqueInput, { nullable: false })
  where!: UpdateWhereUniqueInput;
}

export { DeleteUpdateArgs as DeleteUpdateArgs };
