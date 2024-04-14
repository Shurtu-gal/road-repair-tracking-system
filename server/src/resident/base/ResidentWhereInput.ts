
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { AreaWhereUniqueInput } from "../../area/base/AreaWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ComplaintListRelationFilter } from "../../complaint/base/ComplaintListRelationFilter";
import { UpdateListRelationFilter } from "../../update/base/UpdateListRelationFilter";
import { StringFilter } from "src/util/StringFilter";

@InputType()
class ResidentWhereInput {
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
    type: () => ComplaintListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ComplaintListRelationFilter)
  @IsOptional()
  @Field(() => ComplaintListRelationFilter, {
    nullable: true,
  })
  complaints?: ComplaintListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => UpdateListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UpdateListRelationFilter)
  @IsOptional()
  @Field(() => UpdateListRelationFilter, {
    nullable: true,
  })
  updates?: UpdateListRelationFilter;
}

export { ResidentWhereInput as ResidentWhereInput };
