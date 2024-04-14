
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsInt,
  IsDate,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { ResidentWhereUniqueInput } from "../../resident/base/ResidentWhereUniqueInput";
import { SupervisorWhereUniqueInput } from "../../supervisor/base/SupervisorWhereUniqueInput";
import { AdminWhereUniqueInput } from "../../admin/base/AdminWhereUniqueInput";
import { MayorWhereUniqueInput } from "../../mayor/base/MayorWhereUniqueInput";
import { ComplaintUpdateManyWithoutUsersInput } from "./ComplaintUpdateManyWithoutUsersInput";
import { RepairUpdateManyWithoutUsersInput } from "./RepairUpdateManyWithoutUsersInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  age?: number;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

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
    type: () => MayorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MayorWhereUniqueInput)
  @IsOptional()
  @Field(() => MayorWhereUniqueInput, {
    nullable: true,
  })
  mayor?: MayorWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ComplaintUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ComplaintUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ComplaintUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  complaint?: ComplaintUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => RepairUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => RepairUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => RepairUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  repair?: RepairUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  roles?: InputJsonValue;
}

export { UserUpdateInput as UserUpdateInput };
