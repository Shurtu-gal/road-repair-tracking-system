
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ResourceWhereInput } from "./ResourceWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ResourceOrderByInput } from "./ResourceOrderByInput";

@ArgsType()
class ResourceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ResourceWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ResourceWhereInput, { nullable: true })
  @Type(() => ResourceWhereInput)
  where?: ResourceWhereInput;

  @ApiProperty({
    required: false,
    type: [ResourceOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ResourceOrderByInput], { nullable: true })
  @Type(() => ResourceOrderByInput)
  orderBy?: Array<ResourceOrderByInput>;

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

export { ResourceFindManyArgs as ResourceFindManyArgs };
