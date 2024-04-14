
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { EnumRepairStatus } from "./EnumRepairStatus";
import { EnumRepairPriority } from "./EnumRepairPriority";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { AreaWhereUniqueInput } from "../../area/base/AreaWhereUniqueInput";
import { SupervisorWhereUniqueInput } from "../../supervisor/base/SupervisorWhereUniqueInput";
import { RepairScheduleWhereUniqueInput } from "../../repairSchedule/base/RepairScheduleWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ComplaintListRelationFilter } from "../../complaint/base/ComplaintListRelationFilter";
import { ResourceListRelationFilter } from "../../resource/base/ResourceListRelationFilter";
import { StringFilter } from "src/util/StringFilter";

@InputType()
class RepairWhereInput {
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
    enum: EnumRepairStatus,
  })
  @IsEnum(EnumRepairStatus)
  @IsOptional()
  @Field(() => EnumRepairStatus, {
    nullable: true,
  })
  status?: "Pending" | "InProgress" | "Completed";

  @ApiProperty({
    required: false,
    enum: EnumRepairPriority,
  })
  @IsEnum(EnumRepairPriority)
  @IsOptional()
  @Field(() => EnumRepairPriority, {
    nullable: true,
  })
  priority?: "Low" | "Medium" | "High";

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
  assignedTo?: UserWhereUniqueInput;

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
    type: () => SupervisorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SupervisorWhereUniqueInput)
  @IsOptional()
  @Field(() => SupervisorWhereUniqueInput, {
    nullable: true,
  })
  supervisors?: SupervisorWhereUniqueInput;

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
    type: () => ComplaintListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ComplaintListRelationFilter)
  @IsOptional()
  @Field(() => ComplaintListRelationFilter, {
    nullable: true,
  })
  complaints?: ComplaintListRelationFilter;

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

export { RepairWhereInput as RepairWhereInput };
