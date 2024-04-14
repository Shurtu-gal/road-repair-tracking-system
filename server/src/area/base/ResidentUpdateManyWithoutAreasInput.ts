
import { InputType, Field } from "@nestjs/graphql";
import { ResidentWhereUniqueInput } from "../../resident/base/ResidentWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ResidentUpdateManyWithoutAreasInput {
  @Field(() => [ResidentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ResidentWhereUniqueInput],
  })
  connect?: Array<ResidentWhereUniqueInput>;

  @Field(() => [ResidentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ResidentWhereUniqueInput],
  })
  disconnect?: Array<ResidentWhereUniqueInput>;

  @Field(() => [ResidentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ResidentWhereUniqueInput],
  })
  set?: Array<ResidentWhereUniqueInput>;
}

export { ResidentUpdateManyWithoutAreasInput as ResidentUpdateManyWithoutAreasInput };
