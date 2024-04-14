
import { InputType, Field } from "@nestjs/graphql";
import { SupervisorWhereUniqueInput } from "../../supervisor/base/SupervisorWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SupervisorCreateNestedManyWithoutAdminsInput {
  @Field(() => [SupervisorWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SupervisorWhereUniqueInput],
  })
  connect?: Array<SupervisorWhereUniqueInput>;
}

export { SupervisorCreateNestedManyWithoutAdminsInput as SupervisorCreateNestedManyWithoutAdminsInput };
