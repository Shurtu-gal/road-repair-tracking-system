
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ResidentCreateInput } from "./ResidentCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateResidentArgs {
  @ApiProperty({
    required: true,
    type: () => ResidentCreateInput,
  })
  @ValidateNested()
  @Type(() => ResidentCreateInput)
  @Field(() => ResidentCreateInput, { nullable: false })
  data!: ResidentCreateInput;
}

export { CreateResidentArgs as CreateResidentArgs };
