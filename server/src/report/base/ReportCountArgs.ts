
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReportWhereInput } from "./ReportWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ReportCountArgs {
  @ApiProperty({
    required: false,
    type: () => ReportWhereInput,
  })
  @Field(() => ReportWhereInput, { nullable: true })
  @Type(() => ReportWhereInput)
  where?: ReportWhereInput;
}

export { ReportCountArgs as ReportCountArgs };
