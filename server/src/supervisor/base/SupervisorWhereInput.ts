
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { AreaWhereUniqueInput } from "../../area/base/AreaWhereUniqueInput";
import { RepairScheduleWhereUniqueInput } from "../../repairSchedule/base/RepairScheduleWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { AdminWhereUniqueInput } from "../../admin/base/AdminWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { RepairListRelationFilter } from "../../repair/base/RepairListRelationFilter";
import { ResourceListRelationFilter } from "../../resource/base/ResourceListRelationFilter";

@InputType()
class SupervisorWhereInput {
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
    type: () => RepairScheduleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RepairScheduleWhereUniqueInput)
  @IsOptional()
  @Field(() => RepairScheduleWhereUniqueInput, {
    nullable: true,
  })
  repairSchedule?: RepairScheduleWhereUniqueInput;

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
    type: () => ResourceListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ResourceListRelationFilter)
  @IsOptional()
  @Field(() => ResourceListRelationFilter, {
    nullable: true,
  })
  resources?: ResourceListRelationFilter;
}

export { SupervisorWhereInput as SupervisorWhereInput };
