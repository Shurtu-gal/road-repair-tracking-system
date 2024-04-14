
import { InputType, Field } from "@nestjs/graphql";
import { RepairWhereUniqueInput } from "../../repair/base/RepairWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class RepairUpdateManyWithoutAreasInput {
  @Field(() => [RepairWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RepairWhereUniqueInput],
  })
  connect?: Array<RepairWhereUniqueInput>;

  @Field(() => [RepairWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RepairWhereUniqueInput],
  })
  disconnect?: Array<RepairWhereUniqueInput>;

  @Field(() => [RepairWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RepairWhereUniqueInput],
  })
  set?: Array<RepairWhereUniqueInput>;
}

export { RepairUpdateManyWithoutAreasInput as RepairUpdateManyWithoutAreasInput };
