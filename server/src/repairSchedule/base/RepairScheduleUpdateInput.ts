
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AdminWhereUniqueInput } from "../../admin/base/AdminWhereUniqueInput";
import { SupervisorUpdateManyWithoutRepairSchedulesInput } from "./SupervisorUpdateManyWithoutRepairSchedulesInput";
import { RepairUpdateManyWithoutRepairSchedulesInput } from "./RepairUpdateManyWithoutRepairSchedulesInput";
import { ReportUpdateManyWithoutRepairSchedulesInput } from "./ReportUpdateManyWithoutRepairSchedulesInput";

@InputType()
class RepairScheduleUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  time?: Date;

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
  admin?: AdminWhereUniqueInput | null;

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
    type: () => SupervisorUpdateManyWithoutRepairSchedulesInput,
  })
  @ValidateNested()
  @Type(() => SupervisorUpdateManyWithoutRepairSchedulesInput)
  @IsOptional()
  @Field(() => SupervisorUpdateManyWithoutRepairSchedulesInput, {
    nullable: true,
  })
  supervisors?: SupervisorUpdateManyWithoutRepairSchedulesInput;

  @ApiProperty({
    required: false,
    type: () => RepairUpdateManyWithoutRepairSchedulesInput,
  })
  @ValidateNested()
  @Type(() => RepairUpdateManyWithoutRepairSchedulesInput)
  @IsOptional()
  @Field(() => RepairUpdateManyWithoutRepairSchedulesInput, {
    nullable: true,
  })
  repairs?: RepairUpdateManyWithoutRepairSchedulesInput;

  @ApiProperty({
    required: false,
    type: () => ReportUpdateManyWithoutRepairSchedulesInput,
  })
  @ValidateNested()
  @Type(() => ReportUpdateManyWithoutRepairSchedulesInput)
  @IsOptional()
  @Field(() => ReportUpdateManyWithoutRepairSchedulesInput, {
    nullable: true,
  })
  report?: ReportUpdateManyWithoutRepairSchedulesInput;
}

export { RepairScheduleUpdateInput as RepairScheduleUpdateInput };
