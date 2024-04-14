
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsInt,
  IsString,
  ValidateNested,
  IsOptional,
  IsDate,
} from "class-validator";
import { Repair } from "../../repair/base/Repair";
import { Type } from "class-transformer";
import { Supervisor } from "../../supervisor/base/Supervisor";
import { Admin } from "../../admin/base/Admin";
import { Report } from "../../report/base/Report";

@ObjectType()
class Resource {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  quantity!: number;

  @ApiProperty({
    required: true,
    type: () => Repair,
  })
  @ValidateNested()
  @Type(() => Repair)
  allocation?: Repair;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  price!: number;

  @ApiProperty({
    required: false,
    type: () => Supervisor,
  })
  @ValidateNested()
  @Type(() => Supervisor)
  @IsOptional()
  supervisors?: Supervisor | null;

  @ApiProperty({
    required: false,
    type: () => Admin,
  })
  @ValidateNested()
  @Type(() => Admin)
  @IsOptional()
  admin?: Admin | null;

  @ApiProperty({
    required: false,
    type: () => Report,
  })
  @ValidateNested()
  @Type(() => Report)
  @IsOptional()
  report?: Report | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  deletedAt!: Date | null;
}

export { Resource as Resource };
