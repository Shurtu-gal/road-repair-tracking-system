
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AreaWhereUniqueInput } from "../../area/base/AreaWhereUniqueInput";
import { ValidateNested, IsOptional, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { RepairScheduleWhereUniqueInput } from "../../repairSchedule/base/RepairScheduleWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { AdminWhereUniqueInput } from "../../admin/base/AdminWhereUniqueInput";
import { RepairUpdateManyWithoutSupervisorsInput } from "./RepairUpdateManyWithoutSupervisorsInput";
import { ResourceUpdateManyWithoutSupervisorsInput } from "./ResourceUpdateManyWithoutSupervisorsInput";

@InputType()
class SupervisorUpdateInput {
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
  repairSchedule?: RepairScheduleWhereUniqueInput | null;

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
    type: () => RepairUpdateManyWithoutSupervisorsInput,
  })
  @ValidateNested()
  @Type(() => RepairUpdateManyWithoutSupervisorsInput)
  @IsOptional()
  @Field(() => RepairUpdateManyWithoutSupervisorsInput, {
    nullable: true,
  })
  repairs?: RepairUpdateManyWithoutSupervisorsInput;

  @ApiProperty({
    required: false,
    type: () => ResourceUpdateManyWithoutSupervisorsInput,
  })
  @ValidateNested()
  @Type(() => ResourceUpdateManyWithoutSupervisorsInput)
  @IsOptional()
  @Field(() => ResourceUpdateManyWithoutSupervisorsInput, {
    nullable: true,
  })
  resources?: ResourceUpdateManyWithoutSupervisorsInput;
}

export { SupervisorUpdateInput as SupervisorUpdateInput };
