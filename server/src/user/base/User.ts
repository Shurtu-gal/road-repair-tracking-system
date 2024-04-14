
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsInt,
  IsString,
  IsOptional,
  IsDate,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { Resident } from "../../resident/base/Resident";
import { Supervisor } from "../../supervisor/base/Supervisor";
import { Admin } from "../../admin/base/Admin";
import { Mayor } from "../../mayor/base/Mayor";
import { Complaint } from "../../complaint/base/Complaint";
import { Repair } from "../../repair/base/Repair";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";

@ObjectType()
class User {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

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
  phone!: string | null;

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
    type: () => Resident,
  })
  @ValidateNested()
  @Type(() => Resident)
  @IsOptional()
  residents?: Resident | null;

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
    type: () => Admin,
  })
  @ValidateNested()
  @Type(() => Admin)
  @IsOptional()
  admin?: Admin | null;

  @ApiProperty({
    required: false,
    type: () => Mayor,
  })
  @ValidateNested()
  @Type(() => Mayor)
  @IsOptional()
  mayor?: Mayor | null;

  @ApiProperty({
    required: false,
    type: () => [Complaint],
  })
  @ValidateNested()
  @Type(() => Complaint)
  @IsOptional()
  complaint?: Array<Complaint>;

  @ApiProperty({
    required: false,
    type: () => [Repair],
  })
  @ValidateNested()
  @Type(() => Repair)
  @IsOptional()
  repair?: Array<Repair>;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  roles!: JsonValue;
}

export { User as User };
