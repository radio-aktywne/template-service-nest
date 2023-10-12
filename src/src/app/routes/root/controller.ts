import { Controller, Get } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";
import { GetResponse } from "./models";
import { RootRouteService } from "./service";

/** Root controller. */
@Controller()
export class RootRouteController {
  constructor(private readonly rootRouteService: RootRouteService) {}

  @Get()
  @ApiOkResponse({
    description: "OK",
    type: GetResponse,
  })
  async get(): Promise<GetResponse> {
    const foo = await this.rootRouteService.get();

    return { foo };
  }
}
