
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SupervisorWhereInput } from "./SupervisorWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SupervisorListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SupervisorWhereInput,
  })
  @ValidateNested()
  @Type(() => SupervisorWhereInput)
  @IsOptional()
  @Field(() => SupervisorWhereInput, {
    nullable: true,
  })
  every?: SupervisorWhereInput;

  @ApiProperty({
    required: false,
    type: () => SupervisorWhereInput,
  })
  @ValidateNested()
  @Type(() => SupervisorWhereInput)
  @IsOptional()
  @Field(() => SupervisorWhereInput, {
    nullable: true,
  })
  some?: SupervisorWhereInput;

  @ApiProperty({
    required: false,
    type: () => SupervisorWhereInput,
  })
  @ValidateNested()
  @Type(() => SupervisorWhereInput)
  @IsOptional()
  @Field(() => SupervisorWhereInput, {
    nullable: true,
  })
  none?: SupervisorWhereInput;
}
export { SupervisorListRelationFilter as SupervisorListRelationFilter };
