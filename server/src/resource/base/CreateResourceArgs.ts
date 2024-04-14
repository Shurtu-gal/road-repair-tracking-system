
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ResourceCreateInput } from "./ResourceCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateResourceArgs {
  @ApiProperty({
    required: true,
    type: () => ResourceCreateInput,
  })
  @ValidateNested()
  @Type(() => ResourceCreateInput)
  @Field(() => ResourceCreateInput, { nullable: false })
  data!: ResourceCreateInput;
}

export { CreateResourceArgs as CreateResourceArgs };
