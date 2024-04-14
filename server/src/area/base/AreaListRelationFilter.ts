
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AreaWhereInput } from "./AreaWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AreaListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AreaWhereInput,
  })
  @ValidateNested()
  @Type(() => AreaWhereInput)
  @IsOptional()
  @Field(() => AreaWhereInput, {
    nullable: true,
  })
  every?: AreaWhereInput;

  @ApiProperty({
    required: false,
    type: () => AreaWhereInput,
  })
  @ValidateNested()
  @Type(() => AreaWhereInput)
  @IsOptional()
  @Field(() => AreaWhereInput, {
    nullable: true,
  })
  some?: AreaWhereInput;

  @ApiProperty({
    required: false,
    type: () => AreaWhereInput,
  })
  @ValidateNested()
  @Type(() => AreaWhereInput)
  @IsOptional()
  @Field(() => AreaWhereInput, {
    nullable: true,
  })
  none?: AreaWhereInput;
}
export { AreaListRelationFilter as AreaListRelationFilter };
