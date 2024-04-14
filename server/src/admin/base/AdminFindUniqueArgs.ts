
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AdminWhereUniqueInput } from "./AdminWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class AdminFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => AdminWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AdminWhereUniqueInput)
  @Field(() => AdminWhereUniqueInput, { nullable: false })
  where!: AdminWhereUniqueInput;
}

export { AdminFindUniqueArgs as AdminFindUniqueArgs };
