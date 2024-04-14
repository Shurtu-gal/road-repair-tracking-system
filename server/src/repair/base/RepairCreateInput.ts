
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumRepairStatus } from "./EnumRepairStatus";
import { IsEnum, ValidateNested, IsOptional, IsDate } from "class-validator";
import { EnumRepairPriority } from "./EnumRepairPriority";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { Type } from "class-transformer";
import { AreaWhereUniqueInput } from "../../area/base/AreaWhereUniqueInput";
import { SupervisorWhereUniqueInput } from "../../supervisor/base/SupervisorWhereUniqueInput";
import { RepairScheduleWhereUniqueInput } from "../../repairSchedule/base/RepairScheduleWhereUniqueInput";
import { ComplaintCreateNestedManyWithoutRepairsInput } from "./ComplaintCreateNestedManyWithoutRepairsInput";
import { ResourceCreateNestedManyWithoutRepairsInput } from "./ResourceCreateNestedManyWithoutRepairsInput";

@InputType()
class RepairCreateInput {
  @ApiProperty({
    required: true,
    enum: EnumRepairStatus,
  })
  @IsEnum(EnumRepairStatus)
  @Field(() => EnumRepairStatus)
  status!: "Pending" | "InProgress" | "Completed";

  @ApiProperty({
    required: true,
    enum: EnumRepairPriority,
  })
  @IsEnum(EnumRepairPriority)
  @Field(() => EnumRepairPriority)
  priority!: "Low" | "Medium" | "High";

  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  assignedTo!: UserWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AreaWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AreaWhereUniqueInput)
  @Field(() => AreaWhereUniqueInput)
  area!: AreaWhereUniqueInput;

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
    type: () => ComplaintCreateNestedManyWithoutRepairsInput,
  })
  @ValidateNested()
  @Type(() => ComplaintCreateNestedManyWithoutRepairsInput)
  @IsOptional()
  @Field(() => ComplaintCreateNestedManyWithoutRepairsInput, {
    nullable: true,
  })
  complaints?: ComplaintCreateNestedManyWithoutRepairsInput;

  @ApiProperty({
    required: false,
    type: () => ResourceCreateNestedManyWithoutRepairsInput,
  })
  @ValidateNested()
  @Type(() => ResourceCreateNestedManyWithoutRepairsInput)
  @IsOptional()
  @Field(() => ResourceCreateNestedManyWithoutRepairsInput, {
    nullable: true,
  })
  resources?: ResourceCreateNestedManyWithoutRepairsInput;
}

export { RepairCreateInput as RepairCreateInput };
