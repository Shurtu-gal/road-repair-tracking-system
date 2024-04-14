
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { RepairScheduleWhereUniqueInput } from "../../repairSchedule/base/RepairScheduleWhereUniqueInput";
import { MayorWhereUniqueInput } from "../../mayor/base/MayorWhereUniqueInput";
import { ComplaintUpdateManyWithoutReportsInput } from "./ComplaintUpdateManyWithoutReportsInput";
import { ResourceUpdateManyWithoutReportsInput } from "./ResourceUpdateManyWithoutReportsInput";
import { UpdateUpdateManyWithoutReportsInput } from "./UpdateUpdateManyWithoutReportsInput";

@InputType()
class ReportUpdateInput {
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
    type: () => ComplaintUpdateManyWithoutReportsInput,
  })
  @ValidateNested()
  @Type(() => ComplaintUpdateManyWithoutReportsInput)
  @IsOptional()
  @Field(() => ComplaintUpdateManyWithoutReportsInput, {
    nullable: true,
  })
  complaints?: ComplaintUpdateManyWithoutReportsInput;

  @ApiProperty({
    required: false,
    type: () => ResourceUpdateManyWithoutReportsInput,
  })
  @ValidateNested()
  @Type(() => ResourceUpdateManyWithoutReportsInput)
  @IsOptional()
  @Field(() => ResourceUpdateManyWithoutReportsInput, {
    nullable: true,
  })
  resources?: ResourceUpdateManyWithoutReportsInput;

  @ApiProperty({
    required: false,
    type: () => UpdateUpdateManyWithoutReportsInput,
  })
  @ValidateNested()
  @Type(() => UpdateUpdateManyWithoutReportsInput)
  @IsOptional()
  @Field(() => UpdateUpdateManyWithoutReportsInput, {
    nullable: true,
  })
  update?: UpdateUpdateManyWithoutReportsInput;
}

export { ReportUpdateInput as ReportUpdateInput };
