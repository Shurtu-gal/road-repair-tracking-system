
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { AdminListRelationFilter } from "../../admin/base/AdminListRelationFilter";
import { ReportListRelationFilter } from "../../report/base/ReportListRelationFilter";

@InputType()
class MayorWhereInput {
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
  city?: StringFilter;

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

  @ApiProperty({
    required: false,
    type: () => AdminListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AdminListRelationFilter)
  @IsOptional()
  @Field(() => AdminListRelationFilter, {
    nullable: true,
  })
  admin?: AdminListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ReportListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ReportListRelationFilter)
  @IsOptional()
  @Field(() => ReportListRelationFilter, {
    nullable: true,
  })
  reports?: ReportListRelationFilter;
}

export { MayorWhereInput as MayorWhereInput };
