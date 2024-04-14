
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MayorWhereUniqueInput } from "./MayorWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MayorUpdateInput } from "./MayorUpdateInput";

@ArgsType()
class UpdateMayorArgs {
  @ApiProperty({
    required: true,
    type: () => MayorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MayorWhereUniqueInput)
  @Field(() => MayorWhereUniqueInput, { nullable: false })
  where!: MayorWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MayorUpdateInput,
  })
  @ValidateNested()
  @Type(() => MayorUpdateInput)
  @Field(() => MayorUpdateInput, { nullable: false })
  data!: MayorUpdateInput;
}

export { UpdateMayorArgs as UpdateMayorArgs };
