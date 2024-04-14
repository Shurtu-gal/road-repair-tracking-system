
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { RepairScheduleWhereUniqueInput } from "../../repairSchedule/base/RepairScheduleWhereUniqueInput";
import { MayorWhereUniqueInput } from "../../mayor/base/MayorWhereUniqueInput";
import { ComplaintCreateNestedManyWithoutReportsInput } from "./ComplaintCreateNestedManyWithoutReportsInput";
import { ResourceCreateNestedManyWithoutReportsInput } from "./ResourceCreateNestedManyWithoutReportsInput";
import { UpdateCreateNestedManyWithoutReportsInput } from "./UpdateCreateNestedManyWithoutReportsInput";

@InputType()
class ReportCreateInput {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  time!: Date;

  @ApiProperty({
    required: true,
    type: () => RepairScheduleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RepairScheduleWhereUniqueInput)
  @Field(() => RepairScheduleWhereUniqueInput)
  repairSchedule!: RepairScheduleWhereUniqueInput;

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
  mayor?: MayorWhereUniqueInput | null;

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
    type: () => ComplaintCreateNestedManyWithoutReportsInput,
  })
  @ValidateNested()
  @Type(() => ComplaintCreateNestedManyWithoutReportsInput)
  @IsOptional()
  @Field(() => ComplaintCreateNestedManyWithoutReportsInput, {
    nullable: true,
  })
  complaints?: ComplaintCreateNestedManyWithoutReportsInput;

  @ApiProperty({
    required: false,
    type: () => ResourceCreateNestedManyWithoutReportsInput,
  })
  @ValidateNested()
  @Type(() => ResourceCreateNestedManyWithoutReportsInput)
  @IsOptional()
  @Field(() => ResourceCreateNestedManyWithoutReportsInput, {
    nullable: true,
  })
  resources?: ResourceCreateNestedManyWithoutReportsInput;

  @ApiProperty({
    required: false,
    type: () => UpdateCreateNestedManyWithoutReportsInput,
  })
  @ValidateNested()
  @Type(() => UpdateCreateNestedManyWithoutReportsInput)
  @IsOptional()
  @Field(() => UpdateCreateNestedManyWithoutReportsInput, {
    nullable: true,
  })
  update?: UpdateCreateNestedManyWithoutReportsInput;
}

export { ReportCreateInput as ReportCreateInput };
