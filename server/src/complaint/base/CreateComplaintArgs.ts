
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ComplaintCreateInput } from "./ComplaintCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateComplaintArgs {
  @ApiProperty({
    required: true,
    type: () => ComplaintCreateInput,
  })
  @ValidateNested()
  @Type(() => ComplaintCreateInput)
  @Field(() => ComplaintCreateInput, { nullable: false })
  data!: ComplaintCreateInput;
}

export { CreateComplaintArgs as CreateComplaintArgs };
