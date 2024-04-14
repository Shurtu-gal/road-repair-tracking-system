
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AreaWhereUniqueInput } from "../../area/base/AreaWhereUniqueInput";
import { ValidateNested, IsDate, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { ComplaintCreateNestedManyWithoutResidentsInput } from "./ComplaintCreateNestedManyWithoutResidentsInput";
import { UpdateCreateNestedManyWithoutResidentsInput } from "./UpdateCreateNestedManyWithoutResidentsInput";

@InputType()
class ResidentCreateInput {
  @ApiProperty({
    required: true,
    type: () => AreaWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AreaWhereUniqueInput)
  @Field(() => AreaWhereUniqueInput)
  area!: AreaWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  user!: UserWhereUniqueInput;

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
    type: () => ComplaintCreateNestedManyWithoutResidentsInput,
  })
  @ValidateNested()
  @Type(() => ComplaintCreateNestedManyWithoutResidentsInput)
  @IsOptional()
  @Field(() => ComplaintCreateNestedManyWithoutResidentsInput, {
    nullable: true,
  })
  complaints?: ComplaintCreateNestedManyWithoutResidentsInput;

  @ApiProperty({
    required: false,
    type: () => UpdateCreateNestedManyWithoutResidentsInput,
  })
  @ValidateNested()
  @Type(() => UpdateCreateNestedManyWithoutResidentsInput)
  @IsOptional()
  @Field(() => UpdateCreateNestedManyWithoutResidentsInput, {
    nullable: true,
  })
  updates?: UpdateCreateNestedManyWithoutResidentsInput;
}

export { ResidentCreateInput as ResidentCreateInput };
