
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AdminWhereInput } from "./AdminWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AdminListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AdminWhereInput,
  })
  @ValidateNested()
  @Type(() => AdminWhereInput)
  @IsOptional()
  @Field(() => AdminWhereInput, {
    nullable: true,
  })
  every?: AdminWhereInput;

  @ApiProperty({
    required: false,
    type: () => AdminWhereInput,
  })
  @ValidateNested()
  @Type(() => AdminWhereInput)
  @IsOptional()
  @Field(() => AdminWhereInput, {
    nullable: true,
  })
  some?: AdminWhereInput;

  @ApiProperty({
    required: false,
    type: () => AdminWhereInput,
  })
  @ValidateNested()
  @Type(() => AdminWhereInput)
  @IsOptional()
  @Field(() => AdminWhereInput, {
    nullable: true,
  })
  none?: AdminWhereInput;
}
export { AdminListRelationFilter as AdminListRelationFilter };
