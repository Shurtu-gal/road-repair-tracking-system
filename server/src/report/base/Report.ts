
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsDate, ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { RepairSchedule } from "../../repairSchedule/base/RepairSchedule";
import { Mayor } from "../../mayor/base/Mayor";
import { Complaint } from "../../complaint/base/Complaint";
import { Resource } from "../../resource/base/Resource";
import { Update } from "../../update/base/Update";

@ObjectType()
class Report {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  time!: Date;

  @ApiProperty({
    required: true,
    type: () => RepairSchedule,
  })
  @ValidateNested()
  @Type(() => RepairSchedule)
  repairSchedule?: RepairSchedule;

  @ApiProperty({
    required: false,
    type: () => Mayor,
  })
  @ValidateNested()
  @Type(() => Mayor)
  @IsOptional()
  mayor?: Mayor | null;

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

  @ApiProperty({
    required: false,
    type: () => [Update],
  })
  @ValidateNested()
  @Type(() => Update)
  @IsOptional()
  update?: Array<Update>;
}

export { Report as Report };
