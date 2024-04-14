
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { AdminWhereUniqueInput } from "../../admin/base/AdminWhereUniqueInput";
import { SupervisorCreateNestedManyWithoutRepairSchedulesInput } from "./SupervisorCreateNestedManyWithoutRepairSchedulesInput";
import { RepairCreateNestedManyWithoutRepairSchedulesInput } from "./RepairCreateNestedManyWithoutRepairSchedulesInput";
import { ReportCreateNestedManyWithoutRepairSchedulesInput } from "./ReportCreateNestedManyWithoutRepairSchedulesInput";

@InputType()
class RepairScheduleCreateInput {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  time!: Date;

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
    type: () => SupervisorCreateNestedManyWithoutRepairSchedulesInput,
  })
  @ValidateNested()
  @Type(() => SupervisorCreateNestedManyWithoutRepairSchedulesInput)
  @IsOptional()
  @Field(() => SupervisorCreateNestedManyWithoutRepairSchedulesInput, {
    nullable: true,
  })
  supervisors?: SupervisorCreateNestedManyWithoutRepairSchedulesInput;

  @ApiProperty({
    required: false,
    type: () => RepairCreateNestedManyWithoutRepairSchedulesInput,
  })
  @ValidateNested()
  @Type(() => RepairCreateNestedManyWithoutRepairSchedulesInput)
  @IsOptional()
  @Field(() => RepairCreateNestedManyWithoutRepairSchedulesInput, {
    nullable: true,
  })
  repairs?: RepairCreateNestedManyWithoutRepairSchedulesInput;

  @ApiProperty({
    required: false,
    type: () => ReportCreateNestedManyWithoutRepairSchedulesInput,
  })
  @ValidateNested()
  @Type(() => ReportCreateNestedManyWithoutRepairSchedulesInput)
  @IsOptional()
  @Field(() => ReportCreateNestedManyWithoutRepairSchedulesInput, {
    nullable: true,
  })
  report?: ReportCreateNestedManyWithoutRepairSchedulesInput;
}

export { RepairScheduleCreateInput as RepairScheduleCreateInput };
