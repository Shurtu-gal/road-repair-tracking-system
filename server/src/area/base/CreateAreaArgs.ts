
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AreaCreateInput } from "./AreaCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateAreaArgs {
  @ApiProperty({
    required: true,
    type: () => AreaCreateInput,
  })
  @ValidateNested()
  @Type(() => AreaCreateInput)
  @Field(() => AreaCreateInput, { nullable: false })
  data!: AreaCreateInput;
}

export { CreateAreaArgs as CreateAreaArgs };
