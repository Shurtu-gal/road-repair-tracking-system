
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsInt,
  IsString,
  ValidateNested,
  IsDate,
  IsOptional,
} from "class-validator";
import { User } from "../../user/base/User";
import { Type } from "class-transformer";
import { Admin } from "../../admin/base/Admin";
import { Report } from "../../report/base/Report";

@ObjectType()
class Mayor {
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
  city!: string;

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  user?: User;

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
    type: () => [Admin],
  })
  @ValidateNested()
  @Type(() => Admin)
  @IsOptional()
  admin?: Array<Admin>;

  @ApiProperty({
    required: false,
    type: () => [Report],
  })
  @ValidateNested()
  @Type(() => Report)
  @IsOptional()
  reports?: Array<Report>;
}

export { Mayor as Mayor };
