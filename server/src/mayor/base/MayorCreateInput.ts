
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested, IsDate, IsOptional } from "class-validator";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { Type } from "class-transformer";
import { AdminCreateNestedManyWithoutMayorsInput } from "./AdminCreateNestedManyWithoutMayorsInput";
import { ReportCreateNestedManyWithoutMayorsInput } from "./ReportCreateNestedManyWithoutMayorsInput";

@InputType()
class MayorCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  city!: string;

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
    type: () => AdminCreateNestedManyWithoutMayorsInput,
  })
  @ValidateNested()
  @Type(() => AdminCreateNestedManyWithoutMayorsInput)
  @IsOptional()
  @Field(() => AdminCreateNestedManyWithoutMayorsInput, {
    nullable: true,
  })
  admin?: AdminCreateNestedManyWithoutMayorsInput;

  @ApiProperty({
    required: false,
    type: () => ReportCreateNestedManyWithoutMayorsInput,
  })
  @ValidateNested()
  @Type(() => ReportCreateNestedManyWithoutMayorsInput)
  @IsOptional()
  @Field(() => ReportCreateNestedManyWithoutMayorsInput, {
    nullable: true,
  })
  reports?: ReportCreateNestedManyWithoutMayorsInput;
}

export { MayorCreateInput as MayorCreateInput };
