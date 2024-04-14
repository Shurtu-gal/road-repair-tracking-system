
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AreaWhereInput } from "./AreaWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AreaOrderByInput } from "./AreaOrderByInput";

@ArgsType()
class AreaFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AreaWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AreaWhereInput, { nullable: true })
  @Type(() => AreaWhereInput)
  where?: AreaWhereInput;

  @ApiProperty({
    required: false,
    type: [AreaOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AreaOrderByInput], { nullable: true })
  @Type(() => AreaOrderByInput)
  orderBy?: Array<AreaOrderByInput>;

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

export { AreaFindManyArgs as AreaFindManyArgs };
