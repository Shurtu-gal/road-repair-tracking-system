
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ResidentWhereUniqueInput } from "./ResidentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class ResidentFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => ResidentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ResidentWhereUniqueInput)
  @Field(() => ResidentWhereUniqueInput, { nullable: false })
  where!: ResidentWhereUniqueInput;
}

export { ResidentFindUniqueArgs as ResidentFindUniqueArgs };
