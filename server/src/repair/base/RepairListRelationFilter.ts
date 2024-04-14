
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RepairWhereInput } from "./RepairWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RepairListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RepairWhereInput,
  })
  @ValidateNested()
  @Type(() => RepairWhereInput)
  @IsOptional()
  @Field(() => RepairWhereInput, {
    nullable: true,
  })
  every?: RepairWhereInput;

  @ApiProperty({
    required: false,
    type: () => RepairWhereInput,
  })
  @ValidateNested()
  @Type(() => RepairWhereInput)
  @IsOptional()
  @Field(() => RepairWhereInput, {
    nullable: true,
  })
  some?: RepairWhereInput;

  @ApiProperty({
    required: false,
    type: () => RepairWhereInput,
  })
  @ValidateNested()
  @Type(() => RepairWhereInput)
  @IsOptional()
  @Field(() => RepairWhereInput, {
    nullable: true,
  })
  none?: RepairWhereInput;
}
export { RepairListRelationFilter as RepairListRelationFilter };
