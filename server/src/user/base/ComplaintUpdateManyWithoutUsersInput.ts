
import { InputType, Field } from "@nestjs/graphql";
import { ComplaintWhereUniqueInput } from "../../complaint/base/ComplaintWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ComplaintUpdateManyWithoutUsersInput {
  @Field(() => [ComplaintWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ComplaintWhereUniqueInput],
  })
  connect?: Array<ComplaintWhereUniqueInput>;

  @Field(() => [ComplaintWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ComplaintWhereUniqueInput],
  })
  disconnect?: Array<ComplaintWhereUniqueInput>;

  @Field(() => [ComplaintWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ComplaintWhereUniqueInput],
  })
  set?: Array<ComplaintWhereUniqueInput>;
}

export { ComplaintUpdateManyWithoutUsersInput as ComplaintUpdateManyWithoutUsersInput };
