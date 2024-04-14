
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RepairWhereInput } from "./RepairWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class RepairCountArgs {
  @ApiProperty({
    required: false,
    type: () => RepairWhereInput,
  })
  @Field(() => RepairWhereInput, { nullable: true })
  @Type(() => RepairWhereInput)
  where?: RepairWhereInput;
}

export { RepairCountArgs as RepairCountArgs };
