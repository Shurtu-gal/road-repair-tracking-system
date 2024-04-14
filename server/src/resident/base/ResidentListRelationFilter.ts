
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ResidentWhereInput } from "./ResidentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ResidentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ResidentWhereInput,
  })
  @ValidateNested()
  @Type(() => ResidentWhereInput)
  @IsOptional()
  @Field(() => ResidentWhereInput, {
    nullable: true,
  })
  every?: ResidentWhereInput;

  @ApiProperty({
    required: false,
    type: () => ResidentWhereInput,
  })
  @ValidateNested()
  @Type(() => ResidentWhereInput)
  @IsOptional()
  @Field(() => ResidentWhereInput, {
    nullable: true,
  })
  some?: ResidentWhereInput;

  @ApiProperty({
    required: false,
    type: () => ResidentWhereInput,
  })
  @ValidateNested()
  @Type(() => ResidentWhereInput)
  @IsOptional()
  @Field(() => ResidentWhereInput, {
    nullable: true,
  })
  none?: ResidentWhereInput;
}
export { ResidentListRelationFilter as ResidentListRelationFilter };
