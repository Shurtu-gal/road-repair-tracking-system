
import { InputType, Field } from "@nestjs/graphql";
import { ReportWhereUniqueInput } from "../../report/base/ReportWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ReportCreateNestedManyWithoutRepairSchedulesInput {
  @Field(() => [ReportWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ReportWhereUniqueInput],
  })
  connect?: Array<ReportWhereUniqueInput>;
}

export { ReportCreateNestedManyWithoutRepairSchedulesInput as ReportCreateNestedManyWithoutRepairSchedulesInput };
