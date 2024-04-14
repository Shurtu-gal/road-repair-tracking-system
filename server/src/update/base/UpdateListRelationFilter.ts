
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UpdateWhereInput } from "./UpdateWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UpdateListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UpdateWhereInput,
  })
  @ValidateNested()
  @Type(() => UpdateWhereInput)
  @IsOptional()
  @Field(() => UpdateWhereInput, {
    nullable: true,
  })
  every?: UpdateWhereInput;

  @ApiProperty({
    required: false,
    type: () => UpdateWhereInput,
  })
  @ValidateNested()
  @Type(() => UpdateWhereInput)
  @IsOptional()
  @Field(() => UpdateWhereInput, {
    nullable: true,
  })
  some?: UpdateWhereInput;

  @ApiProperty({
    required: false,
    type: () => UpdateWhereInput,
  })
  @ValidateNested()
  @Type(() => UpdateWhereInput)
  @IsOptional()
  @Field(() => UpdateWhereInput, {
    nullable: true,
  })
  none?: UpdateWhereInput;
}
export { UpdateListRelationFilter as UpdateListRelationFilter };
