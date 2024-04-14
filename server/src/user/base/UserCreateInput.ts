
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsInt,
  IsOptional,
  IsDate,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { ResidentWhereUniqueInput } from "../../resident/base/ResidentWhereUniqueInput";
import { SupervisorWhereUniqueInput } from "../../supervisor/base/SupervisorWhereUniqueInput";
import { AdminWhereUniqueInput } from "../../admin/base/AdminWhereUniqueInput";
import { MayorWhereUniqueInput } from "../../mayor/base/MayorWhereUniqueInput";
import { ComplaintCreateNestedManyWithoutUsersInput } from "./ComplaintCreateNestedManyWithoutUsersInput";
import { RepairCreateNestedManyWithoutUsersInput } from "./RepairCreateNestedManyWithoutUsersInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  age!: number;

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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

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
    type: () => ComplaintCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ComplaintCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ComplaintCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  complaint?: ComplaintCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => RepairCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => RepairCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => RepairCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  repair?: RepairCreateNestedManyWithoutUsersInput;

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

export { UserCreateInput as UserCreateInput };
