
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsDate, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ResidentCreateNestedManyWithoutAreasInput } from "./ResidentCreateNestedManyWithoutAreasInput";
import { SupervisorCreateNestedManyWithoutAreasInput } from "./SupervisorCreateNestedManyWithoutAreasInput";
import { ComplaintCreateNestedManyWithoutAreasInput } from "./ComplaintCreateNestedManyWithoutAreasInput";
import { RepairCreateNestedManyWithoutAreasInput } from "./RepairCreateNestedManyWithoutAreasInput";

@InputType()
class AreaCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  address!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  region!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  country!: string;

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
    type: () => ResidentCreateNestedManyWithoutAreasInput,
  })
  @ValidateNested()
  @Type(() => ResidentCreateNestedManyWithoutAreasInput)
  @IsOptional()
  @Field(() => ResidentCreateNestedManyWithoutAreasInput, {
    nullable: true,
  })
  residents?: ResidentCreateNestedManyWithoutAreasInput;

  @ApiProperty({
    required: false,
    type: () => SupervisorCreateNestedManyWithoutAreasInput,
  })
  @ValidateNested()
  @Type(() => SupervisorCreateNestedManyWithoutAreasInput)
  @IsOptional()
  @Field(() => SupervisorCreateNestedManyWithoutAreasInput, {
    nullable: true,
  })
  supervisors?: SupervisorCreateNestedManyWithoutAreasInput;

  @ApiProperty({
    required: false,
    type: () => ComplaintCreateNestedManyWithoutAreasInput,
  })
  @ValidateNested()
  @Type(() => ComplaintCreateNestedManyWithoutAreasInput)
  @IsOptional()
  @Field(() => ComplaintCreateNestedManyWithoutAreasInput, {
    nullable: true,
  })
  complaint?: ComplaintCreateNestedManyWithoutAreasInput;

  @ApiProperty({
    required: false,
    type: () => RepairCreateNestedManyWithoutAreasInput,
  })
  @ValidateNested()
  @Type(() => RepairCreateNestedManyWithoutAreasInput)
  @IsOptional()
  @Field(() => RepairCreateNestedManyWithoutAreasInput, {
    nullable: true,
  })
  repair?: RepairCreateNestedManyWithoutAreasInput;
}

export { AreaCreateInput as AreaCreateInput };
