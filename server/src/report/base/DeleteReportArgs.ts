
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReportWhereUniqueInput } from "./ReportWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteReportArgs {
  @ApiProperty({
    required: true,
    type: () => ReportWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ReportWhereUniqueInput)
  @Field(() => ReportWhereUniqueInput, { nullable: false })
  where!: ReportWhereUniqueInput;
}

export { DeleteReportArgs as DeleteReportArgs };
