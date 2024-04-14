
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RepairWhereUniqueInput } from "./RepairWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { RepairUpdateInput } from "./RepairUpdateInput";

@ArgsType()
class UpdateRepairArgs {
  @ApiProperty({
    required: true,
    type: () => RepairWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RepairWhereUniqueInput)
  @Field(() => RepairWhereUniqueInput, { nullable: false })
  where!: RepairWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => RepairUpdateInput,
  })
  @ValidateNested()
  @Type(() => RepairUpdateInput)
  @Field(() => RepairUpdateInput, { nullable: false })
  data!: RepairUpdateInput;
}

export { UpdateRepairArgs as UpdateRepairArgs };
