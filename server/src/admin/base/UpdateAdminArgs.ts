
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AdminWhereUniqueInput } from "./AdminWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AdminUpdateInput } from "./AdminUpdateInput";

@ArgsType()
class UpdateAdminArgs {
  @ApiProperty({
    required: true,
    type: () => AdminWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AdminWhereUniqueInput)
  @Field(() => AdminWhereUniqueInput, { nullable: false })
  where!: AdminWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AdminUpdateInput,
  })
  @ValidateNested()
  @Type(() => AdminUpdateInput)
  @Field(() => AdminUpdateInput, { nullable: false })
  data!: AdminUpdateInput;
}

export { UpdateAdminArgs as UpdateAdminArgs };
