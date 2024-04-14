
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsDate, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ResidentUpdateManyWithoutAreasInput } from "./ResidentUpdateManyWithoutAreasInput";
import { SupervisorUpdateManyWithoutAreasInput } from "./SupervisorUpdateManyWithoutAreasInput";
import { ComplaintUpdateManyWithoutAreasInput } from "./ComplaintUpdateManyWithoutAreasInput";
import { RepairUpdateManyWithoutAreasInput } from "./RepairUpdateManyWithoutAreasInput";

@InputType()
class AreaUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  region?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  country?: string;

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
    type: () => ResidentUpdateManyWithoutAreasInput,
  })
  @ValidateNested()
  @Type(() => ResidentUpdateManyWithoutAreasInput)
  @IsOptional()
  @Field(() => ResidentUpdateManyWithoutAreasInput, {
    nullable: true,
  })
  residents?: ResidentUpdateManyWithoutAreasInput;

  @ApiProperty({
    required: false,
    type: () => SupervisorUpdateManyWithoutAreasInput,
  })
  @ValidateNested()
  @Type(() => SupervisorUpdateManyWithoutAreasInput)
  @IsOptional()
  @Field(() => SupervisorUpdateManyWithoutAreasInput, {
    nullable: true,
  })
  supervisors?: SupervisorUpdateManyWithoutAreasInput;

  @ApiProperty({
    required: false,
    type: () => ComplaintUpdateManyWithoutAreasInput,
  })
  @ValidateNested()
  @Type(() => ComplaintUpdateManyWithoutAreasInput)
  @IsOptional()
  @Field(() => ComplaintUpdateManyWithoutAreasInput, {
    nullable: true,
  })
  complaint?: ComplaintUpdateManyWithoutAreasInput;

  @ApiProperty({
    required: false,
    type: () => RepairUpdateManyWithoutAreasInput,
  })
  @ValidateNested()
  @Type(() => RepairUpdateManyWithoutAreasInput)
  @IsOptional()
  @Field(() => RepairUpdateManyWithoutAreasInput, {
    nullable: true,
  })
  repair?: RepairUpdateManyWithoutAreasInput;
}

export { AreaUpdateInput as AreaUpdateInput };
