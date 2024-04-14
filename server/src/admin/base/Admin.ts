
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, ValidateNested, IsDate, IsOptional } from "class-validator";
import { Mayor } from "../../mayor/base/Mayor";
import { Type } from "class-transformer";
import { User } from "../../user/base/User";
import { Supervisor } from "../../supervisor/base/Supervisor";
import { Resource } from "../../resource/base/Resource";
import { RepairSchedule } from "../../repairSchedule/base/RepairSchedule";

@ObjectType()
class Admin {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsInt()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: () => Mayor,
  })
  @ValidateNested()
  @Type(() => Mayor)
  mayor?: Mayor;

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
    type: () => [Supervisor],
  })
  @ValidateNested()
  @Type(() => Supervisor)
  @IsOptional()
  supervisors?: Array<Supervisor>;

  @ApiProperty({
    required: false,
    type: () => [Resource],
  })
  @ValidateNested()
  @Type(() => Resource)
  @IsOptional()
  resources?: Array<Resource>;

  @ApiProperty({
    required: false,
    type: () => [RepairSchedule],
  })
  @ValidateNested()
  @Type(() => RepairSchedule)
  @IsOptional()
  repairSchedules?: Array<RepairSchedule>;
}

export { Admin as Admin };
