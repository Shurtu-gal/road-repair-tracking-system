
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AreaWhereUniqueInput } from "../../area/base/AreaWhereUniqueInput";
import { ValidateNested, IsOptional, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { ComplaintUpdateManyWithoutResidentsInput } from "./ComplaintUpdateManyWithoutResidentsInput";
import { UpdateUpdateManyWithoutResidentsInput } from "./UpdateUpdateManyWithoutResidentsInput";

@InputType()
class ResidentUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AreaWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AreaWhereUniqueInput)
  @IsOptional()
  @Field(() => AreaWhereUniqueInput, {
    nullable: true,
  })
  area?: AreaWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  deletedAt?: Date | null;

  @ApiProperty({
    required: false,
    type: () => ComplaintUpdateManyWithoutResidentsInput,
  })
  @ValidateNested()
  @Type(() => ComplaintUpdateManyWithoutResidentsInput)
  @IsOptional()
  @Field(() => ComplaintUpdateManyWithoutResidentsInput, {
    nullable: true,
  })
  complaints?: ComplaintUpdateManyWithoutResidentsInput;

  @ApiProperty({
    required: false,
    type: () => UpdateUpdateManyWithoutResidentsInput,
  })
  @ValidateNested()
  @Type(() => UpdateUpdateManyWithoutResidentsInput)
  @IsOptional()
  @Field(() => UpdateUpdateManyWithoutResidentsInput, {
    nullable: true,
  })
  updates?: UpdateUpdateManyWithoutResidentsInput;
}

export { ResidentUpdateInput as ResidentUpdateInput };
