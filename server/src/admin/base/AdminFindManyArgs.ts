
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AdminWhereInput } from "./AdminWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AdminOrderByInput } from "./AdminOrderByInput";

@ArgsType()
class AdminFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AdminWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AdminWhereInput, { nullable: true })
  @Type(() => AdminWhereInput)
  where?: AdminWhereInput;

  @ApiProperty({
    required: false,
    type: [AdminOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AdminOrderByInput], { nullable: true })
  @Type(() => AdminOrderByInput)
  orderBy?: Array<AdminOrderByInput>;

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

export { AdminFindManyArgs as AdminFindManyArgs };
