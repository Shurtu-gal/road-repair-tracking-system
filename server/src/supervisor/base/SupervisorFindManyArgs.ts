
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SupervisorWhereInput } from "./SupervisorWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SupervisorOrderByInput } from "./SupervisorOrderByInput";

@ArgsType()
class SupervisorFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SupervisorWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SupervisorWhereInput, { nullable: true })
  @Type(() => SupervisorWhereInput)
  where?: SupervisorWhereInput;

  @ApiProperty({
    required: false,
    type: [SupervisorOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SupervisorOrderByInput], { nullable: true })
  @Type(() => SupervisorOrderByInput)
  orderBy?: Array<SupervisorOrderByInput>;

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

export { SupervisorFindManyArgs as SupervisorFindManyArgs };
