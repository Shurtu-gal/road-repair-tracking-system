
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AreaWhereUniqueInput } from "./AreaWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteAreaArgs {
  @ApiProperty({
    required: true,
    type: () => AreaWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AreaWhereUniqueInput)
  @Field(() => AreaWhereUniqueInput, { nullable: false })
  where!: AreaWhereUniqueInput;
}

export { DeleteAreaArgs as DeleteAreaArgs };
