
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { AreaWhereUniqueInput } from "../../area/base/AreaWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { EnumComplaintSeverity } from "./EnumComplaintSeverity";
import { EnumComplaintStatus } from "./EnumComplaintStatus";
import { ResidentWhereUniqueInput } from "../../resident/base/ResidentWhereUniqueInput";
import { RepairWhereUniqueInput } from "../../repair/base/RepairWhereUniqueInput";
import { ReportWhereUniqueInput } from "../../report/base/ReportWhereUniqueInput";
import { UpdateWhereUniqueInput } from "../../update/base/UpdateWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

@InputType()
class ComplaintWhereInput {
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
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  road?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  description?: StringFilter;

  @ApiProperty({
    required: false,
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  subscription?: BooleanFilter;

  @ApiProperty({
    required: false,
    type: () => AreaWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AreaWhereUniqueInput)
  @IsOptional()
  @Field(() => AreaWhereUniqueInput, {
    nullable: true,
  })
  area?: AreaWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumComplaintSeverity,
  })
  @IsEnum(EnumComplaintSeverity)
  @IsOptional()
  @Field(() => EnumComplaintSeverity, {
    nullable: true,
  })
  severity?: "Low" | "Medium" | "High";

  @ApiProperty({
    required: false,
    enum: EnumComplaintStatus,
  })
  @IsEnum(EnumComplaintStatus)
  @IsOptional()
  @Field(() => EnumComplaintStatus, {
    nullable: true,
  })
  status?: "Pending" | "InProgress" | "Completed";

  @ApiProperty({
    required: false,
    type: () => ResidentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ResidentWhereUniqueInput)
  @IsOptional()
  @Field(() => ResidentWhereUniqueInput, {
    nullable: true,
  })
  residents?: ResidentWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => RepairWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RepairWhereUniqueInput)
  @IsOptional()
  @Field(() => RepairWhereUniqueInput, {
    nullable: true,
  })
  repair?: RepairWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ReportWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ReportWhereUniqueInput)
  @IsOptional()
  @Field(() => ReportWhereUniqueInput, {
    nullable: true,
  })
  report?: ReportWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => UpdateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UpdateWhereUniqueInput)
  @IsOptional()
  @Field(() => UpdateWhereUniqueInput, {
    nullable: true,
  })
  update?: UpdateWhereUniqueInput;

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
}

export { ComplaintWhereInput as ComplaintWhereInput };
