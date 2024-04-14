
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ResidentListRelationFilter } from "../../resident/base/ResidentListRelationFilter";
import { SupervisorListRelationFilter } from "../../supervisor/base/SupervisorListRelationFilter";
import { ComplaintListRelationFilter } from "../../complaint/base/ComplaintListRelationFilter";
import { RepairListRelationFilter } from "../../repair/base/RepairListRelationFilter";

@InputType()
class AreaWhereInput {
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
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  address?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  region?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  country?: StringFilter;

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
    type: () => ResidentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ResidentListRelationFilter)
  @IsOptional()
  @Field(() => ResidentListRelationFilter, {
    nullable: true,
  })
  residents?: ResidentListRelationFilter;

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
    type: () => ComplaintListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ComplaintListRelationFilter)
  @IsOptional()
  @Field(() => ComplaintListRelationFilter, {
    nullable: true,
  })
  complaint?: ComplaintListRelationFilter;

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
  repair?: RepairListRelationFilter;
}

export { AreaWhereInput as AreaWhereInput };
