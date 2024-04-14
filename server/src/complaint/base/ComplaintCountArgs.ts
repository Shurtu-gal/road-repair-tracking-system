
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ComplaintWhereInput } from "./ComplaintWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ComplaintCountArgs {
  @ApiProperty({
    required: false,
    type: () => ComplaintWhereInput,
  })
  @Field(() => ComplaintWhereInput, { nullable: true })
  @Type(() => ComplaintWhereInput)
  where?: ComplaintWhereInput;
}

export { ComplaintCountArgs as ComplaintCountArgs };
