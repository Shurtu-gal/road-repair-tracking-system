
import { InputType, Field } from "@nestjs/graphql";
import { ResourceWhereUniqueInput } from "../../resource/base/ResourceWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ResourceCreateNestedManyWithoutRepairsInput {
  @Field(() => [ResourceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ResourceWhereUniqueInput],
  })
  connect?: Array<ResourceWhereUniqueInput>;
}

export { ResourceCreateNestedManyWithoutRepairsInput as ResourceCreateNestedManyWithoutRepairsInput };
