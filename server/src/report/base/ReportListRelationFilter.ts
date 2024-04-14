
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReportWhereInput } from "./ReportWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ReportListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ReportWhereInput,
  })
  @ValidateNested()
  @Type(() => ReportWhereInput)
  @IsOptional()
  @Field(() => ReportWhereInput, {
    nullable: true,
  })
  every?: ReportWhereInput;

  @ApiProperty({
    required: false,
    type: () => ReportWhereInput,
  })
  @ValidateNested()
  @Type(() => ReportWhereInput)
  @IsOptional()
  @Field(() => ReportWhereInput, {
    nullable: true,
  })
  some?: ReportWhereInput;

  @ApiProperty({
    required: false,
    type: () => ReportWhereInput,
  })
  @ValidateNested()
  @Type(() => ReportWhereInput)
  @IsOptional()
  @Field(() => ReportWhereInput, {
    nullable: true,
  })
  none?: ReportWhereInput;
}
export { ReportListRelationFilter as ReportListRelationFilter };
