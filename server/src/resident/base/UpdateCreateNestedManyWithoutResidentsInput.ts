
import { InputType, Field } from "@nestjs/graphql";
import { UpdateWhereUniqueInput } from "../../update/base/UpdateWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class UpdateCreateNestedManyWithoutResidentsInput {
  @Field(() => [UpdateWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UpdateWhereUniqueInput],
  })
  connect?: Array<UpdateWhereUniqueInput>;
}

export { UpdateCreateNestedManyWithoutResidentsInput as UpdateCreateNestedManyWithoutResidentsInput };
