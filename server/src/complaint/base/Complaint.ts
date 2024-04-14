
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsBoolean,
  ValidateNested,
  IsEnum,
  IsOptional,
  IsDate,
} from "class-validator";
import { Area } from "../../area/base/Area";
import { Type } from "class-transformer";
import { User } from "../../user/base/User";
import { EnumComplaintSeverity } from "./EnumComplaintSeverity";
import { EnumComplaintStatus } from "./EnumComplaintStatus";
import { Resident } from "../../resident/base/Resident";
import { Repair } from "../../repair/base/Repair";
import { Report } from "../../report/base/Report";
import { Update } from "../../update/base/Update";

@ObjectType()
class Complaint {
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
  road!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  description!: string;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  subscription!: boolean;

  @ApiProperty({
    required: true,
    type: () => Area,
  })
  @ValidateNested()
  @Type(() => Area)
  area?: Area;

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  user?: User;

  @ApiProperty({
    required: true,
    enum: EnumComplaintSeverity,
  })
  @IsEnum(EnumComplaintSeverity)
  @Field(() => EnumComplaintSeverity, {
    nullable: true,
  })
  severity?: "Low" | "Medium" | "High";

  @ApiProperty({
    required: true,
    enum: EnumComplaintStatus,
  })
  @IsEnum(EnumComplaintStatus)
  @Field(() => EnumComplaintStatus, {
    nullable: true,
  })
  status?: "Pending" | "InProgress" | "Completed";

  @ApiProperty({
    required: false,
    type: () => Resident,
  })
  @ValidateNested()
  @Type(() => Resident)
  @IsOptional()
  residents?: Resident | null;

  @ApiProperty({
    required: false,
    type: () => Repair,
  })
  @ValidateNested()
  @Type(() => Repair)
  @IsOptional()
  repair?: Repair | null;

  @ApiProperty({
    required: false,
    type: () => Report,
  })
  @ValidateNested()
  @Type(() => Report)
  @IsOptional()
  report?: Report | null;

  @ApiProperty({
    required: false,
    type: () => Update,
  })
  @ValidateNested()
  @Type(() => Update)
  @IsOptional()
  update?: Update | null;

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

export { Complaint as Complaint };
