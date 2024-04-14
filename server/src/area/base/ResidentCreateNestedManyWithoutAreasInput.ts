
import { InputType, Field } from "@nestjs/graphql";
import { ResidentWhereUniqueInput } from "../../resident/base/ResidentWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ResidentCreateNestedManyWithoutAreasInput {
  @Field(() => [ResidentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ResidentWhereUniqueInput],
  })
  connect?: Array<ResidentWhereUniqueInput>;
}

export { ResidentCreateNestedManyWithoutAreasInput as ResidentCreateNestedManyWithoutAreasInput };
