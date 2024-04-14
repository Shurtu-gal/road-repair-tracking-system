
import { InputType, Field } from "@nestjs/graphql";
import { AdminWhereUniqueInput } from "../../admin/base/AdminWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AdminCreateNestedManyWithoutMayorsInput {
  @Field(() => [AdminWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AdminWhereUniqueInput],
  })
  connect?: Array<AdminWhereUniqueInput>;
}

export { AdminCreateNestedManyWithoutMayorsInput as AdminCreateNestedManyWithoutMayorsInput };
