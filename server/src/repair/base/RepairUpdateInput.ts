
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumRepairStatus } from "./EnumRepairStatus";
import { IsEnum, IsOptional, ValidateNested, IsDate } from "class-validator";
import { EnumRepairPriority } from "./EnumRepairPriority";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { Type } from "class-transformer";
import { AreaWhereUniqueInput } from "../../area/base/AreaWhereUniqueInput";
import { SupervisorWhereUniqueInput } from "../../supervisor/base/SupervisorWhereUniqueInput";
import { RepairScheduleWhereUniqueInput } from "../../repairSchedule/base/RepairScheduleWhereUniqueInput";
import { ComplaintUpdateManyWithoutRepairsInput } from "./ComplaintUpdateManyWithoutRepairsInput";
import { ResourceUpdateManyWithoutRepairsInput } from "./ResourceUpdateManyWithoutRepairsInput";

@InputType()
class RepairUpdateInput {
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
  supervisors?: SupervisorWhereUniqueInput | null;

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
  repairSchedule?: RepairScheduleWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  deletedAt?: Date | null;

  @ApiProperty({
    required: false,
    type: () => ComplaintUpdateManyWithoutRepairsInput,
  })
  @ValidateNested()
  @Type(() => ComplaintUpdateManyWithoutRepairsInput)
  @IsOptional()
  @Field(() => ComplaintUpdateManyWithoutRepairsInput, {
    nullable: true,
  })
  complaints?: ComplaintUpdateManyWithoutRepairsInput;

  @ApiProperty({
    required: false,
    type: () => ResourceUpdateManyWithoutRepairsInput,
  })
  @ValidateNested()
  @Type(() => ResourceUpdateManyWithoutRepairsInput)
  @IsOptional()
  @Field(() => ResourceUpdateManyWithoutRepairsInput, {
    nullable: true,
  })
  resources?: ResourceUpdateManyWithoutRepairsInput;
}

export { RepairUpdateInput as RepairUpdateInput };
