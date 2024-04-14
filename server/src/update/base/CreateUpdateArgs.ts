
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UpdateCreateInput } from "./UpdateCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateUpdateArgs {
  @ApiProperty({
    required: true,
    type: () => UpdateCreateInput,
  })
  @ValidateNested()
  @Type(() => UpdateCreateInput)
  @Field(() => UpdateCreateInput, { nullable: false })
  data!: UpdateCreateInput;
}

export { CreateUpdateArgs as CreateUpdateArgs };
