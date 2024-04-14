
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RepairWhereInput } from "./RepairWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RepairOrderByInput } from "./RepairOrderByInput";

@ArgsType()
class RepairFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RepairWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RepairWhereInput, { nullable: true })
  @Type(() => RepairWhereInput)
  where?: RepairWhereInput;

  @ApiProperty({
    required: false,
    type: [RepairOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RepairOrderByInput], { nullable: true })
  @Type(() => RepairOrderByInput)
  orderBy?: Array<RepairOrderByInput>;

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

export { RepairFindManyArgs as RepairFindManyArgs };
