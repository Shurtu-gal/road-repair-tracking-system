
import { InputType, Field } from "@nestjs/graphql";
import { ComplaintWhereUniqueInput } from "../../complaint/base/ComplaintWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ComplaintCreateNestedManyWithoutAreasInput {
  @Field(() => [ComplaintWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ComplaintWhereUniqueInput],
  })
  connect?: Array<ComplaintWhereUniqueInput>;
}

export { ComplaintCreateNestedManyWithoutAreasInput as ComplaintCreateNestedManyWithoutAreasInput };
