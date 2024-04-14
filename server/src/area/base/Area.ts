
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsInt,
  IsString,
  IsDate,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { Resident } from "../../resident/base/Resident";
import { Supervisor } from "../../supervisor/base/Supervisor";
import { Complaint } from "../../complaint/base/Complaint";
import { Repair } from "../../repair/base/Repair";

@ObjectType()
class Area {
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
  address!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  region!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  country!: string;

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
    type: () => [Resident],
  })
  @ValidateNested()
  @Type(() => Resident)
  @IsOptional()
  residents?: Array<Resident>;

  @ApiProperty({
    required: false,
    type: () => [Supervisor],
  })
  @ValidateNested()
  @Type(() => Supervisor)
  @IsOptional()
  supervisors?: Array<Supervisor>;

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
}

export { Area as Area };
