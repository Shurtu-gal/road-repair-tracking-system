
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { MayorWhereUniqueInput } from "../../mayor/base/MayorWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SupervisorListRelationFilter } from "../../supervisor/base/SupervisorListRelationFilter";
import { ResourceListRelationFilter } from "../../resource/base/ResourceListRelationFilter";
import { RepairScheduleListRelationFilter } from "../../repairSchedule/base/RepairScheduleListRelationFilter";
import { StringFilter } from "src/util/StringFilter";

@InputType()
class AdminWhereInput {
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
    type: () => MayorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MayorWhereUniqueInput)
  @IsOptional()
  @Field(() => MayorWhereUniqueInput, {
    nullable: true,
  })
  mayor?: MayorWhereUniqueInput;

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
    type: () => ResourceListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ResourceListRelationFilter)
  @IsOptional()
  @Field(() => ResourceListRelationFilter, {
    nullable: true,
  })
  resources?: ResourceListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => RepairScheduleListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RepairScheduleListRelationFilter)
  @IsOptional()
  @Field(() => RepairScheduleListRelationFilter, {
    nullable: true,
  })
  repairSchedules?: RepairScheduleListRelationFilter;
}

export { AdminWhereInput as AdminWhereInput };
