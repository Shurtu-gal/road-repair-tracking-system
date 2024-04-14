
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AdminCreateInput } from "./AdminCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateAdminArgs {
  @ApiProperty({
    required: true,
    type: () => AdminCreateInput,
  })
  @ValidateNested()
  @Type(() => AdminCreateInput)
  @Field(() => AdminCreateInput, { nullable: false })
  data!: AdminCreateInput;
}

export { CreateAdminArgs as CreateAdminArgs };
