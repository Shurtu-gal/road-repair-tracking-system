
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ReportWhereUniqueInput } from "../../report/base/ReportWhereUniqueInput";
import { ResidentWhereUniqueInput } from "../../resident/base/ResidentWhereUniqueInput";
import { ComplaintCreateNestedManyWithoutUpdatesInput } from "./ComplaintCreateNestedManyWithoutUpdatesInput";

@InputType()
class UpdateCreateInput {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  time!: Date;

  @ApiProperty({
    required: true,
    type: () => ReportWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ReportWhereUniqueInput)
  @Field(() => ReportWhereUniqueInput)
  report!: ReportWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ResidentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ResidentWhereUniqueInput)
  @IsOptional()
  @Field(() => ResidentWhereUniqueInput, {
    nullable: true,
  })
  residents?: ResidentWhereUniqueInput | null;

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
    type: () => ComplaintCreateNestedManyWithoutUpdatesInput,
  })
  @ValidateNested()
  @Type(() => ComplaintCreateNestedManyWithoutUpdatesInput)
  @IsOptional()
  @Field(() => ComplaintCreateNestedManyWithoutUpdatesInput, {
    nullable: true,
  })
  complaints?: ComplaintCreateNestedManyWithoutUpdatesInput;
}

export { UpdateCreateInput as UpdateCreateInput };
