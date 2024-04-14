
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { RepairWhereUniqueInput } from "../../repair/base/RepairWhereUniqueInput";
import { SupervisorWhereUniqueInput } from "../../supervisor/base/SupervisorWhereUniqueInput";
import { AdminWhereUniqueInput } from "../../admin/base/AdminWhereUniqueInput";
import { ReportWhereUniqueInput } from "../../report/base/ReportWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "src/util/IntFilter";

@InputType()
class ResourceWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  quantity?: IntFilter;

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
  allocation?: RepairWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  price?: IntFilter;

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
  supervisors?: SupervisorWhereUniqueInput;

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
  admin?: AdminWhereUniqueInput;

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
  report?: ReportWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  deletedAt?: DateTimeNullableFilter;
}

export { ResourceWhereInput as ResourceWhereInput };
