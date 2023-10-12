import { ApiProperty } from "@nestjs/swagger";
import { Equals } from "class-validator";

/** Response for GET requests. */
export class GetResponse {
  @Equals("bar")
  @ApiProperty({
    description: "Should be 'bar'.",
  })
  foo: "bar";
}
