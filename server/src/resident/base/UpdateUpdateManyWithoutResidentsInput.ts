
import { InputType, Field } from "@nestjs/graphql";
import { UpdateWhereUniqueInput } from "../../update/base/UpdateWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class UpdateUpdateManyWithoutResidentsInput {
  @Field(() => [UpdateWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UpdateWhereUniqueInput],
  })
  connect?: Array<UpdateWhereUniqueInput>;

  @Field(() => [UpdateWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UpdateWhereUniqueInput],
  })
  disconnect?: Array<UpdateWhereUniqueInput>;

  @Field(() => [UpdateWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UpdateWhereUniqueInput],
  })
  set?: Array<UpdateWhereUniqueInput>;
}

export { UpdateUpdateManyWithoutResidentsInput as UpdateUpdateManyWithoutResidentsInput };
