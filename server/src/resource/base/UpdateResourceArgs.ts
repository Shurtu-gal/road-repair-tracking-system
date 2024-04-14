
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ResourceWhereUniqueInput } from "./ResourceWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ResourceUpdateInput } from "./ResourceUpdateInput";

@ArgsType()
class UpdateResourceArgs {
  @ApiProperty({
    required: true,
    type: () => ResourceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ResourceWhereUniqueInput)
  @Field(() => ResourceWhereUniqueInput, { nullable: false })
  where!: ResourceWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ResourceUpdateInput,
  })
  @ValidateNested()
  @Type(() => ResourceUpdateInput)
  @Field(() => ResourceUpdateInput, { nullable: false })
  data!: ResourceUpdateInput;
}

export { UpdateResourceArgs as UpdateResourceArgs };
