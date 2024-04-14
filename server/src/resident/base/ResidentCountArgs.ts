
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ResidentWhereInput } from "./ResidentWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ResidentCountArgs {
  @ApiProperty({
    required: false,
    type: () => ResidentWhereInput,
  })
  @Field(() => ResidentWhereInput, { nullable: true })
  @Type(() => ResidentWhereInput)
  where?: ResidentWhereInput;
}

export { ResidentCountArgs as ResidentCountArgs };
