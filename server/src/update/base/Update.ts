
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsDate, ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Report } from "../../report/base/Report";
import { Resident } from "../../resident/base/Resident";
import { Complaint } from "../../complaint/base/Complaint";

@ObjectType()
class Update {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  time!: Date;

  @ApiProperty({
    required: true,
    type: () => Report,
  })
  @ValidateNested()
  @Type(() => Report)
  report?: Report;

  @ApiProperty({
    required: false,
    type: () => Resident,
  })
  @ValidateNested()
  @Type(() => Resident)
  @IsOptional()
  residents?: Resident | null;

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
}

export { Update as Update };
