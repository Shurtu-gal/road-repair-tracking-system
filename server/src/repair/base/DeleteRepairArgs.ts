
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RepairWhereUniqueInput } from "./RepairWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteRepairArgs {
  @ApiProperty({
    required: true,
    type: () => RepairWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RepairWhereUniqueInput)
  @Field(() => RepairWhereUniqueInput, { nullable: false })
  where!: RepairWhereUniqueInput;
}

export { DeleteRepairArgs as DeleteRepairArgs };
