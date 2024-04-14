
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReportWhereInput } from "./ReportWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ReportOrderByInput } from "./ReportOrderByInput";

@ArgsType()
class ReportFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ReportWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ReportWhereInput, { nullable: true })
  @Type(() => ReportWhereInput)
  where?: ReportWhereInput;

  @ApiProperty({
    required: false,
    type: [ReportOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ReportOrderByInput], { nullable: true })
  @Type(() => ReportOrderByInput)
  orderBy?: Array<ReportOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ReportFindManyArgs as ReportFindManyArgs };
