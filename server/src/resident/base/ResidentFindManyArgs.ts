
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ResidentWhereInput } from "./ResidentWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ResidentOrderByInput } from "./ResidentOrderByInput";

@ArgsType()
class ResidentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ResidentWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ResidentWhereInput, { nullable: true })
  @Type(() => ResidentWhereInput)
  where?: ResidentWhereInput;

  @ApiProperty({
    required: false,
    type: [ResidentOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ResidentOrderByInput], { nullable: true })
  @Type(() => ResidentOrderByInput)
  orderBy?: Array<ResidentOrderByInput>;

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

export { ResidentFindManyArgs as ResidentFindManyArgs };
