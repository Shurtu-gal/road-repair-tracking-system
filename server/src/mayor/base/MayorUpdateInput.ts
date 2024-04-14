
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested, IsDate } from "class-validator";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { Type } from "class-transformer";
import { AdminUpdateManyWithoutMayorsInput } from "./AdminUpdateManyWithoutMayorsInput";
import { ReportUpdateManyWithoutMayorsInput } from "./ReportUpdateManyWithoutMayorsInput";

@InputType()
class MayorUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  city?: string;

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
    type: () => AdminUpdateManyWithoutMayorsInput,
  })
  @ValidateNested()
  @Type(() => AdminUpdateManyWithoutMayorsInput)
  @IsOptional()
  @Field(() => AdminUpdateManyWithoutMayorsInput, {
    nullable: true,
  })
  admin?: AdminUpdateManyWithoutMayorsInput;

  @ApiProperty({
    required: false,
    type: () => ReportUpdateManyWithoutMayorsInput,
  })
  @ValidateNested()
  @Type(() => ReportUpdateManyWithoutMayorsInput)
  @IsOptional()
  @Field(() => ReportUpdateManyWithoutMayorsInput, {
    nullable: true,
  })
  reports?: ReportUpdateManyWithoutMayorsInput;
}

export { MayorUpdateInput as MayorUpdateInput };
