
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";
import { Transform } from "class-transformer";

@InputType()
class ResidentWhereUniqueInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;
}

export { ResidentWhereUniqueInput as ResidentWhereUniqueInput };
