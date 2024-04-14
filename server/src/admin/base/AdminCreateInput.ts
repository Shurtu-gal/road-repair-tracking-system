
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MayorWhereUniqueInput } from "../../mayor/base/MayorWhereUniqueInput";
import { ValidateNested, IsDate, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { SupervisorCreateNestedManyWithoutAdminsInput } from "./SupervisorCreateNestedManyWithoutAdminsInput";
import { ResourceCreateNestedManyWithoutAdminsInput } from "./ResourceCreateNestedManyWithoutAdminsInput";
import { RepairScheduleCreateNestedManyWithoutAdminsInput } from "./RepairScheduleCreateNestedManyWithoutAdminsInput";

@InputType()
class AdminCreateInput {
  @ApiProperty({
    required: true,
    type: () => MayorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MayorWhereUniqueInput)
  @Field(() => MayorWhereUniqueInput)
  mayor!: MayorWhereUniqueInput;

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
    type: () => SupervisorCreateNestedManyWithoutAdminsInput,
  })
  @ValidateNested()
  @Type(() => SupervisorCreateNestedManyWithoutAdminsInput)
  @IsOptional()
  @Field(() => SupervisorCreateNestedManyWithoutAdminsInput, {
    nullable: true,
  })
  supervisors?: SupervisorCreateNestedManyWithoutAdminsInput;

  @ApiProperty({
    required: false,
    type: () => ResourceCreateNestedManyWithoutAdminsInput,
  })
  @ValidateNested()
  @Type(() => ResourceCreateNestedManyWithoutAdminsInput)
  @IsOptional()
  @Field(() => ResourceCreateNestedManyWithoutAdminsInput, {
    nullable: true,
  })
  resources?: ResourceCreateNestedManyWithoutAdminsInput;

  @ApiProperty({
    required: false,
    type: () => RepairScheduleCreateNestedManyWithoutAdminsInput,
  })
  @ValidateNested()
  @Type(() => RepairScheduleCreateNestedManyWithoutAdminsInput)
  @IsOptional()
  @Field(() => RepairScheduleCreateNestedManyWithoutAdminsInput, {
    nullable: true,
  })
  repairSchedules?: RepairScheduleCreateNestedManyWithoutAdminsInput;
}

export { AdminCreateInput as AdminCreateInput };
