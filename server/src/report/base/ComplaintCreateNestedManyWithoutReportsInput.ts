
import { InputType, Field } from "@nestjs/graphql";
import { ComplaintWhereUniqueInput } from "../../complaint/base/ComplaintWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ComplaintCreateNestedManyWithoutReportsInput {
  @Field(() => [ComplaintWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ComplaintWhereUniqueInput],
  })
  connect?: Array<ComplaintWhereUniqueInput>;
}

export { ComplaintCreateNestedManyWithoutReportsInput as ComplaintCreateNestedManyWithoutReportsInput };
