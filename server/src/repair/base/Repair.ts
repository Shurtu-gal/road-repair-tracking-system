import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsInt,
  IsEnum,
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
} from "class-validator";
import { EnumRepairStatus } from "./EnumRepairStatus";
import { EnumRepairPriority } from "./EnumRepairPriority";
import { User } from "../../user/base/User";
import { Type } from "class-transformer";
import { Area } from "../../area/base/Area";
import { Supervisor } from "../../supervisor/base/Supervisor";
import { RepairSchedule } from "../../repairSchedule/base/RepairSchedule";
import { Complaint } from "../../complaint/base/Complaint";
import { Resource } from "../../resource/base/Resource";

@ObjectType()
class Repair {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    enum: EnumRepairStatus,
  })
  @IsEnum(EnumRepairStatus)
  @Field(() => EnumRepairStatus, {
    nullable: true,
  })
  status?: "Pending" | "InProgress" | "Completed";

  @ApiProperty({
    required: true,
    enum: EnumRepairPriority,
  })
  @IsEnum(EnumRepairPriority)
  @Field(() => EnumRepairPriority, {
    nullable: true,
  })
  priority?: "Low" | "Medium" | "High";

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  assignedTo?: User;

  @ApiProperty({
    required: true,
    type: () => Area,
  })
  @ValidateNested()
  @Type(() => Area)
  area?: Area;

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
    type: () => RepairSchedule,
  })
  @ValidateNested()
  @Type(() => RepairSchedule)
  @IsOptional()
  repairSchedule?: RepairSchedule | null;

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
    type: () => [Complaint],
  })
  @ValidateNested()
  @Type(() => Complaint)
  @IsOptional()
  complaints?: Array<Complaint>;

  @ApiProperty({
    required: false,
    type: () => [Resource],
  })
  @ValidateNested()
  @Type(() => Resource)
  @IsOptional()
  resources?: Array<Resource>;
}

export { Repair as Repair };
