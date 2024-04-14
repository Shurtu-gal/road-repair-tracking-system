
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UpdateWhereInput } from "./UpdateWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UpdateOrderByInput } from "./UpdateOrderByInput";

@ArgsType()
class UpdateFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UpdateWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UpdateWhereInput, { nullable: true })
  @Type(() => UpdateWhereInput)
  where?: UpdateWhereInput;

  @ApiProperty({
    required: false,
    type: [UpdateOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UpdateOrderByInput], { nullable: true })
  @Type(() => UpdateOrderByInput)
  orderBy?: Array<UpdateOrderByInput>;

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

export { UpdateFindManyArgs as UpdateFindManyArgs };
