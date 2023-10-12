import { Injectable } from "@nestjs/common";

/** Root service. */
@Injectable()
export class RootRouteService {
  async get(): Promise<"bar"> {
    return "bar";
  }
}
