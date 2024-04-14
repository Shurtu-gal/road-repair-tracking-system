
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsInt,
  ValidateNested,
  IsOptional,
  IsDate,
} from "class-validator";
import { RepairWhereUniqueInput } from "../../repair/base/RepairWhereUniqueInput";
import { Type } from "class-transformer";
import { SupervisorWhereUniqueInput } from "../../supervisor/base/SupervisorWhereUniqueInput";
import { AdminWhereUniqueInput } from "../../admin/base/AdminWhereUniqueInput";
import { ReportWhereUniqueInput } from "../../report/base/ReportWhereUniqueInput";

@InputType()
class ResourceCreateInput {
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
    type: () => RepairWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RepairWhereUniqueInput)
  @Field(() => RepairWhereUniqueInput)
  allocation!: RepairWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  price!: number;

  @ApiProperty({
    required: false,
    type: () => SupervisorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SupervisorWhereUniqueInput)
  @IsOptional()
  @Field(() => SupervisorWhereUniqueInput, {
    nullable: true,
  })
  supervisors?: SupervisorWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => AdminWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AdminWhereUniqueInput)
  @IsOptional()
  @Field(() => AdminWhereUniqueInput, {
    nullable: true,
  })
  admin?: AdminWhereUniqueInput | null;

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
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  deletedAt?: Date | null;
}

export { ResourceCreateInput as ResourceCreateInput };
