
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ReportWhereUniqueInput } from "../../report/base/ReportWhereUniqueInput";
import { ResidentWhereUniqueInput } from "../../resident/base/ResidentWhereUniqueInput";
import { ComplaintUpdateManyWithoutUpdatesInput } from "./ComplaintUpdateManyWithoutUpdatesInput";

@InputType()
class UpdateUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  time?: Date;

  @ApiProperty({
    required: false,
    type: () => ReportWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ReportWhereUniqueInput)
  @IsOptional()
  @Field(() => ReportWhereUniqueInput, {
    nullable: true,
  })
  report?: ReportWhereUniqueInput;

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
    type: () => ComplaintUpdateManyWithoutUpdatesInput,
  })
  @ValidateNested()
  @Type(() => ComplaintUpdateManyWithoutUpdatesInput)
  @IsOptional()
  @Field(() => ComplaintUpdateManyWithoutUpdatesInput, {
    nullable: true,
  })
  complaints?: ComplaintUpdateManyWithoutUpdatesInput;
}

export { UpdateUpdateInput as UpdateUpdateInput };
