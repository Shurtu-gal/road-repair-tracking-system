
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ResourceWhereInput } from "./ResourceWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ResourceCountArgs {
  @ApiProperty({
    required: false,
    type: () => ResourceWhereInput,
  })
  @Field(() => ResourceWhereInput, { nullable: true })
  @Type(() => ResourceWhereInput)
  where?: ResourceWhereInput;
}

export { ResourceCountArgs as ResourceCountArgs };
