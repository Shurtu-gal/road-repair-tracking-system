
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReportCreateInput } from "./ReportCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateReportArgs {
  @ApiProperty({
    required: true,
    type: () => ReportCreateInput,
  })
  @ValidateNested()
  @Type(() => ReportCreateInput)
  @Field(() => ReportCreateInput, { nullable: false })
  data!: ReportCreateInput;
}

export { CreateReportArgs as CreateReportArgs };
