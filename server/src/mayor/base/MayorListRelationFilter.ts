
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MayorWhereInput } from "./MayorWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MayorListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MayorWhereInput,
  })
  @ValidateNested()
  @Type(() => MayorWhereInput)
  @IsOptional()
  @Field(() => MayorWhereInput, {
    nullable: true,
  })
  every?: MayorWhereInput;

  @ApiProperty({
    required: false,
    type: () => MayorWhereInput,
  })
  @ValidateNested()
  @Type(() => MayorWhereInput)
  @IsOptional()
  @Field(() => MayorWhereInput, {
    nullable: true,
  })
  some?: MayorWhereInput;

  @ApiProperty({
    required: false,
    type: () => MayorWhereInput,
  })
  @ValidateNested()
  @Type(() => MayorWhereInput)
  @IsOptional()
  @Field(() => MayorWhereInput, {
    nullable: true,
  })
  none?: MayorWhereInput;
}
export { MayorListRelationFilter as MayorListRelationFilter };
