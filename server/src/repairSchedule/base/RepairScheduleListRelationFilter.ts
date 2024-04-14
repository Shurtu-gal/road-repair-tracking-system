
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RepairScheduleWhereInput } from "./RepairScheduleWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RepairScheduleListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RepairScheduleWhereInput,
  })
  @ValidateNested()
  @Type(() => RepairScheduleWhereInput)
  @IsOptional()
  @Field(() => RepairScheduleWhereInput, {
    nullable: true,
  })
  every?: RepairScheduleWhereInput;

  @ApiProperty({
    required: false,
    type: () => RepairScheduleWhereInput,
  })
  @ValidateNested()
  @Type(() => RepairScheduleWhereInput)
  @IsOptional()
  @Field(() => RepairScheduleWhereInput, {
    nullable: true,
  })
  some?: RepairScheduleWhereInput;

  @ApiProperty({
    required: false,
    type: () => RepairScheduleWhereInput,
  })
  @ValidateNested()
  @Type(() => RepairScheduleWhereInput)
  @IsOptional()
  @Field(() => RepairScheduleWhereInput, {
    nullable: true,
  })
  none?: RepairScheduleWhereInput;
}
export { RepairScheduleListRelationFilter as RepairScheduleListRelationFilter };
