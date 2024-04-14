
import { InputType, Field } from "@nestjs/graphql";
import { AdminWhereUniqueInput } from "../../admin/base/AdminWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AdminUpdateManyWithoutMayorsInput {
  @Field(() => [AdminWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AdminWhereUniqueInput],
  })
  connect?: Array<AdminWhereUniqueInput>;

  @Field(() => [AdminWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AdminWhereUniqueInput],
  })
  disconnect?: Array<AdminWhereUniqueInput>;

  @Field(() => [AdminWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AdminWhereUniqueInput],
  })
  set?: Array<AdminWhereUniqueInput>;
}

export { AdminUpdateManyWithoutMayorsInput as AdminUpdateManyWithoutMayorsInput };
