
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ComplaintWhereInput } from "./ComplaintWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ComplaintOrderByInput } from "./ComplaintOrderByInput";

@ArgsType()
class ComplaintFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ComplaintWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ComplaintWhereInput, { nullable: true })
  @Type(() => ComplaintWhereInput)
  where?: ComplaintWhereInput;

  @ApiProperty({
    required: false,
    type: [ComplaintOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ComplaintOrderByInput], { nullable: true })
  @Type(() => ComplaintOrderByInput)
  orderBy?: Array<ComplaintOrderByInput>;

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

export { ComplaintFindManyArgs as ComplaintFindManyArgs };
