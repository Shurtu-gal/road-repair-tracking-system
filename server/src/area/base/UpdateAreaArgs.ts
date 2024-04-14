
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AreaWhereUniqueInput } from "./AreaWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AreaUpdateInput } from "./AreaUpdateInput";

@ArgsType()
class UpdateAreaArgs {
  @ApiProperty({
    required: true,
    type: () => AreaWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AreaWhereUniqueInput)
  @Field(() => AreaWhereUniqueInput, { nullable: false })
  where!: AreaWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AreaUpdateInput,
  })
  @ValidateNested()
  @Type(() => AreaUpdateInput)
  @Field(() => AreaUpdateInput, { nullable: false })
  data!: AreaUpdateInput;
}

export { UpdateAreaArgs as UpdateAreaArgs };
