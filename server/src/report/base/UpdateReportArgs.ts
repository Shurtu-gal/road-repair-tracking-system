
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReportWhereUniqueInput } from "./ReportWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ReportUpdateInput } from "./ReportUpdateInput";

@ArgsType()
class UpdateReportArgs {
  @ApiProperty({
    required: true,
    type: () => ReportWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ReportWhereUniqueInput)
  @Field(() => ReportWhereUniqueInput, { nullable: false })
  where!: ReportWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ReportUpdateInput,
  })
  @ValidateNested()
  @Type(() => ReportUpdateInput)
  @Field(() => ReportUpdateInput, { nullable: false })
  data!: ReportUpdateInput;
}

export { UpdateReportArgs as UpdateReportArgs };
