
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Area } from "../../area/base/Area";
import { Type } from "class-transformer";
import { RepairSchedule } from "../../repairSchedule/base/RepairSchedule";
import { User } from "../../user/base/User";
import { Admin } from "../../admin/base/Admin";
import { Repair } from "../../repair/base/Repair";
import { Resource } from "../../resource/base/Resource";

@ObjectType()
class Supervisor {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: () => Area,
  })
  @ValidateNested()
  @Type(() => Area)
  area?: Area;

  @ApiProperty({
    required: false,
    type: () => RepairSchedule,
  })
  @ValidateNested()
  @Type(() => RepairSchedule)
  @IsOptional()
  repairSchedule?: RepairSchedule | null;

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  user?: User;

  @ApiProperty({
    required: false,
    type: () => Admin,
  })
  @ValidateNested()
  @Type(() => Admin)
  @IsOptional()
  admin?: Admin | null;

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

  @ApiProperty({
    required: false,
    type: () => [Repair],
  })
  @ValidateNested()
  @Type(() => Repair)
  @IsOptional()
  repairs?: Array<Repair>;

  @ApiProperty({
    required: false,
    type: () => [Resource],
  })
  @ValidateNested()
  @Type(() => Resource)
  @IsOptional()
  resources?: Array<Resource>;
}

export { Supervisor as Supervisor };
