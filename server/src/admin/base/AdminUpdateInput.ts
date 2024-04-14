
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MayorWhereUniqueInput } from "../../mayor/base/MayorWhereUniqueInput";
import { ValidateNested, IsOptional, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { SupervisorUpdateManyWithoutAdminsInput } from "./SupervisorUpdateManyWithoutAdminsInput";
import { ResourceUpdateManyWithoutAdminsInput } from "./ResourceUpdateManyWithoutAdminsInput";
import { RepairScheduleUpdateManyWithoutAdminsInput } from "./RepairScheduleUpdateManyWithoutAdminsInput";

@InputType()
class AdminUpdateInput {
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
    type: () => SupervisorUpdateManyWithoutAdminsInput,
  })
  @ValidateNested()
  @Type(() => SupervisorUpdateManyWithoutAdminsInput)
  @IsOptional()
  @Field(() => SupervisorUpdateManyWithoutAdminsInput, {
    nullable: true,
  })
  supervisors?: SupervisorUpdateManyWithoutAdminsInput;

  @ApiProperty({
    required: false,
    type: () => ResourceUpdateManyWithoutAdminsInput,
  })
  @ValidateNested()
  @Type(() => ResourceUpdateManyWithoutAdminsInput)
  @IsOptional()
  @Field(() => ResourceUpdateManyWithoutAdminsInput, {
    nullable: true,
  })
  resources?: ResourceUpdateManyWithoutAdminsInput;

  @ApiProperty({
    required: false,
    type: () => RepairScheduleUpdateManyWithoutAdminsInput,
  })
  @ValidateNested()
  @Type(() => RepairScheduleUpdateManyWithoutAdminsInput)
  @IsOptional()
  @Field(() => RepairScheduleUpdateManyWithoutAdminsInput, {
    nullable: true,
  })
  repairSchedules?: RepairScheduleUpdateManyWithoutAdminsInput;
}

export { AdminUpdateInput as AdminUpdateInput };
