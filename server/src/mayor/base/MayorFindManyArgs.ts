
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MayorWhereInput } from "./MayorWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MayorOrderByInput } from "./MayorOrderByInput";

@ArgsType()
class MayorFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MayorWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MayorWhereInput, { nullable: true })
  @Type(() => MayorWhereInput)
  where?: MayorWhereInput;

  @ApiProperty({
    required: false,
    type: [MayorOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MayorOrderByInput], { nullable: true })
  @Type(() => MayorOrderByInput)
  orderBy?: Array<MayorOrderByInput>;

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

export { MayorFindManyArgs as MayorFindManyArgs };
