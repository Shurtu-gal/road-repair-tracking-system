
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ComplaintWhereInput } from "./ComplaintWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ComplaintListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ComplaintWhereInput,
  })
  @ValidateNested()
  @Type(() => ComplaintWhereInput)
  @IsOptional()
  @Field(() => ComplaintWhereInput, {
    nullable: true,
  })
  every?: ComplaintWhereInput;

  @ApiProperty({
    required: false,
    type: () => ComplaintWhereInput,
  })
  @ValidateNested()
  @Type(() => ComplaintWhereInput)
  @IsOptional()
  @Field(() => ComplaintWhereInput, {
    nullable: true,
  })
  some?: ComplaintWhereInput;

  @ApiProperty({
    required: false,
    type: () => ComplaintWhereInput,
  })
  @ValidateNested()
  @Type(() => ComplaintWhereInput)
  @IsOptional()
  @Field(() => ComplaintWhereInput, {
    nullable: true,
  })
  none?: ComplaintWhereInput;
}
export { ComplaintListRelationFilter as ComplaintListRelationFilter };
