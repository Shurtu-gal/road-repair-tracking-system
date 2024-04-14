
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ResourceWhereUniqueInput } from "./ResourceWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class ResourceFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => ResourceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ResourceWhereUniqueInput)
  @Field(() => ResourceWhereUniqueInput, { nullable: false })
  where!: ResourceWhereUniqueInput;
}

export { ResourceFindUniqueArgs as ResourceFindUniqueArgs };
