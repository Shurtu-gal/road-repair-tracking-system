
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ComplaintWhereUniqueInput } from "./ComplaintWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class ComplaintFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => ComplaintWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ComplaintWhereUniqueInput)
  @Field(() => ComplaintWhereUniqueInput, { nullable: false })
  where!: ComplaintWhereUniqueInput;
}

export { ComplaintFindUniqueArgs as ComplaintFindUniqueArgs };
