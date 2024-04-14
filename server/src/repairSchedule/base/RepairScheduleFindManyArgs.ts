
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RepairScheduleWhereInput } from "./RepairScheduleWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RepairScheduleOrderByInput } from "./RepairScheduleOrderByInput";

@ArgsType()
class RepairScheduleFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RepairScheduleWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RepairScheduleWhereInput, { nullable: true })
  @Type(() => RepairScheduleWhereInput)
  where?: RepairScheduleWhereInput;

  @ApiProperty({
    required: false,
    type: [RepairScheduleOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RepairScheduleOrderByInput], { nullable: true })
  @Type(() => RepairScheduleOrderByInput)
  orderBy?: Array<RepairScheduleOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { RepairScheduleFindManyArgs as RepairScheduleFindManyArgs };
