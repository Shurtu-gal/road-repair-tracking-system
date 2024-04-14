
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsBoolean,
  ValidateNested,
  IsEnum,
  IsDate,
} from "class-validator";
import { AreaWhereUniqueInput } from "../../area/base/AreaWhereUniqueInput";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { EnumComplaintSeverity } from "./EnumComplaintSeverity";
import { EnumComplaintStatus } from "./EnumComplaintStatus";
import { ResidentWhereUniqueInput } from "../../resident/base/ResidentWhereUniqueInput";
import { RepairWhereUniqueInput } from "../../repair/base/RepairWhereUniqueInput";
import { ReportWhereUniqueInput } from "../../report/base/ReportWhereUniqueInput";
import { UpdateWhereUniqueInput } from "../../update/base/UpdateWhereUniqueInput";

@InputType()
class ComplaintUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  road?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  subscription?: boolean;

  @ApiProperty({
    required: false,
    type: () => AreaWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AreaWhereUniqueInput)
  @IsOptional()
  @Field(() => AreaWhereUniqueInput, {
    nullable: true,
  })
  area?: AreaWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumComplaintSeverity,
  })
  @IsEnum(EnumComplaintSeverity)
  @IsOptional()
  @Field(() => EnumComplaintSeverity, {
    nullable: true,
  })
  severity?: "Low" | "Medium" | "High";

  @ApiProperty({
    required: false,
    enum: EnumComplaintStatus,
  })
  @IsEnum(EnumComplaintStatus)
  @IsOptional()
  @Field(() => EnumComplaintStatus, {
    nullable: true,
  })
  status?: "Pending" | "InProgress" | "Completed";

  @ApiProperty({
    required: false,
    type: () => ResidentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ResidentWhereUniqueInput)
  @IsOptional()
  @Field(() => ResidentWhereUniqueInput, {
    nullable: true,
  })
  residents?: ResidentWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => RepairWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RepairWhereUniqueInput)
  @IsOptional()
  @Field(() => RepairWhereUniqueInput, {
    nullable: true,
  })
  repair?: RepairWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ReportWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ReportWhereUniqueInput)
  @IsOptional()
  @Field(() => ReportWhereUniqueInput, {
    nullable: true,
  })
  report?: ReportWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => UpdateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UpdateWhereUniqueInput)
  @IsOptional()
  @Field(() => UpdateWhereUniqueInput, {
    nullable: true,
  })
  update?: UpdateWhereUniqueInput | null;

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
}

export { ComplaintUpdateInput as ComplaintUpdateInput };
