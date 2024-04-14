
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ResourceWhereInput } from "./ResourceWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ResourceListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ResourceWhereInput,
  })
  @ValidateNested()
  @Type(() => ResourceWhereInput)
  @IsOptional()
  @Field(() => ResourceWhereInput, {
    nullable: true,
  })
  every?: ResourceWhereInput;

  @ApiProperty({
    required: false,
    type: () => ResourceWhereInput,
  })
  @ValidateNested()
  @Type(() => ResourceWhereInput)
  @IsOptional()
  @Field(() => ResourceWhereInput, {
    nullable: true,
  })
  some?: ResourceWhereInput;

  @ApiProperty({
    required: false,
    type: () => ResourceWhereInput,
  })
  @ValidateNested()
  @Type(() => ResourceWhereInput)
  @IsOptional()
  @Field(() => ResourceWhereInput, {
    nullable: true,
  })
  none?: ResourceWhereInput;
}
export { ResourceListRelationFilter as ResourceListRelationFilter };
