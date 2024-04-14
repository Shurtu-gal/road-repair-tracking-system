
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsBoolean,
  ValidateNested,
  IsEnum,
  IsOptional,
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
class ComplaintCreateInput {
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
    type: () => AreaWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AreaWhereUniqueInput)
  @Field(() => AreaWhereUniqueInput)
  area!: AreaWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  user!: UserWhereUniqueInput;

  @ApiProperty({
    required: true,
    enum: EnumComplaintSeverity,
  })
  @IsEnum(EnumComplaintSeverity)
  @Field(() => EnumComplaintSeverity)
  severity!: "Low" | "Medium" | "High";

  @ApiProperty({
    required: true,
    enum: EnumComplaintStatus,
  })
  @IsEnum(EnumComplaintStatus)
  @Field(() => EnumComplaintStatus)
  status!: "Pending" | "InProgress" | "Completed";

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

export { ComplaintCreateInput as ComplaintCreateInput };
