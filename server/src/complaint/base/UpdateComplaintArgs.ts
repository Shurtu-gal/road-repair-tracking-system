
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ComplaintWhereUniqueInput } from "./ComplaintWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ComplaintUpdateInput } from "./ComplaintUpdateInput";

@ArgsType()
class UpdateComplaintArgs {
  @ApiProperty({
    required: true,
    type: () => ComplaintWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ComplaintWhereUniqueInput)
  @Field(() => ComplaintWhereUniqueInput, { nullable: false })
  where!: ComplaintWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ComplaintUpdateInput,
  })
  @ValidateNested()
  @Type(() => ComplaintUpdateInput)
  @Field(() => ComplaintUpdateInput, { nullable: false })
  data!: ComplaintUpdateInput;
}

export { UpdateComplaintArgs as UpdateComplaintArgs };
