
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, ValidateNested, IsDate, IsOptional, IsString } from "class-validator";
import { Area } from "../../area/base/Area";
import { Type } from "class-transformer";
import { User } from "../../user/base/User";
import { Complaint } from "../../complaint/base/Complaint";
import { Update } from "../../update/base/Update";

@ObjectType()
class Resident {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: () => Area,
  })
  @ValidateNested()
  @Type(() => Area)
  area?: Area;

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
    type: () => [Complaint],
  })
  @ValidateNested()
  @Type(() => Complaint)
  @IsOptional()
  complaints?: Array<Complaint>;

  @ApiProperty({
    required: false,
    type: () => [Update],
  })
  @ValidateNested()
  @Type(() => Update)
  @IsOptional()
  updates?: Array<Update>;
}

export { Resident as Resident };
