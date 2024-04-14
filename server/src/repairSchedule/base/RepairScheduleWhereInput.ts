
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { AdminWhereUniqueInput } from "../../admin/base/AdminWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SupervisorListRelationFilter } from "../../supervisor/base/SupervisorListRelationFilter";
import { RepairListRelationFilter } from "../../repair/base/RepairListRelationFilter";
import { ReportListRelationFilter } from "../../report/base/ReportListRelationFilter";
import { StringFilter } from "src/util/StringFilter";

@InputType()
class RepairScheduleWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  time?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: () => AdminWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AdminWhereUniqueInput)
  @IsOptional()
  @Field(() => AdminWhereUniqueInput, {
    nullable: true,
  })
  admin?: AdminWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  deletedAt?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: () => SupervisorListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SupervisorListRelationFilter)
  @IsOptional()
  @Field(() => SupervisorListRelationFilter, {
    nullable: true,
  })
  supervisors?: SupervisorListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => RepairListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RepairListRelationFilter)
  @IsOptional()
  @Field(() => RepairListRelationFilter, {
    nullable: true,
  })
  repairs?: RepairListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ReportListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ReportListRelationFilter)
  @IsOptional()
  @Field(() => ReportListRelationFilter, {
    nullable: true,
  })
  report?: ReportListRelationFilter;
}

export { RepairScheduleWhereInput as RepairScheduleWhereInput };
