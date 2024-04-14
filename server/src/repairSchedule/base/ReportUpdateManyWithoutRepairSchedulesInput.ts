
import { InputType, Field } from "@nestjs/graphql";
import { ReportWhereUniqueInput } from "../../report/base/ReportWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ReportUpdateManyWithoutRepairSchedulesInput {
  @Field(() => [ReportWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ReportWhereUniqueInput],
  })
  connect?: Array<ReportWhereUniqueInput>;

  @Field(() => [ReportWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ReportWhereUniqueInput],
  })
  disconnect?: Array<ReportWhereUniqueInput>;

  @Field(() => [ReportWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ReportWhereUniqueInput],
  })
  set?: Array<ReportWhereUniqueInput>;
}

export { ReportUpdateManyWithoutRepairSchedulesInput as ReportUpdateManyWithoutRepairSchedulesInput };
