
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MayorWhereUniqueInput } from "./MayorWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteMayorArgs {
  @ApiProperty({
    required: true,
    type: () => MayorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MayorWhereUniqueInput)
  @Field(() => MayorWhereUniqueInput, { nullable: false })
  where!: MayorWhereUniqueInput;
}

export { DeleteMayorArgs as DeleteMayorArgs };
