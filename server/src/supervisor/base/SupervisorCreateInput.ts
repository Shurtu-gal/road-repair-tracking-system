
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AreaWhereUniqueInput } from "../../area/base/AreaWhereUniqueInput";
import { ValidateNested, IsOptional, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { RepairScheduleWhereUniqueInput } from "../../repairSchedule/base/RepairScheduleWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { AdminWhereUniqueInput } from "../../admin/base/AdminWhereUniqueInput";
import { RepairCreateNestedManyWithoutSupervisorsInput } from "./RepairCreateNestedManyWithoutSupervisorsInput";
import { ResourceCreateNestedManyWithoutSupervisorsInput } from "./ResourceCreateNestedManyWithoutSupervisorsInput";

@InputType()
class SupervisorCreateInput {
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
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  user!: UserWhereUniqueInput;

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
    type: () => RepairCreateNestedManyWithoutSupervisorsInput,
  })
  @ValidateNested()
  @Type(() => RepairCreateNestedManyWithoutSupervisorsInput)
  @IsOptional()
  @Field(() => RepairCreateNestedManyWithoutSupervisorsInput, {
    nullable: true,
  })
  repairs?: RepairCreateNestedManyWithoutSupervisorsInput;

  @ApiProperty({
    required: false,
    type: () => ResourceCreateNestedManyWithoutSupervisorsInput,
  })
  @ValidateNested()
  @Type(() => ResourceCreateNestedManyWithoutSupervisorsInput)
  @IsOptional()
  @Field(() => ResourceCreateNestedManyWithoutSupervisorsInput, {
    nullable: true,
  })
  resources?: ResourceCreateNestedManyWithoutSupervisorsInput;
}

export { SupervisorCreateInput as SupervisorCreateInput };
