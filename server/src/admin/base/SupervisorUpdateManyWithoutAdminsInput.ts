
import { InputType, Field } from "@nestjs/graphql";
import { SupervisorWhereUniqueInput } from "../../supervisor/base/SupervisorWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SupervisorUpdateManyWithoutAdminsInput {
  @Field(() => [SupervisorWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SupervisorWhereUniqueInput],
  })
  connect?: Array<SupervisorWhereUniqueInput>;

  @Field(() => [SupervisorWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SupervisorWhereUniqueInput],
  })
  disconnect?: Array<SupervisorWhereUniqueInput>;

  @Field(() => [SupervisorWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SupervisorWhereUniqueInput],
  })
  set?: Array<SupervisorWhereUniqueInput>;
}

export { SupervisorUpdateManyWithoutAdminsInput as SupervisorUpdateManyWithoutAdminsInput };
