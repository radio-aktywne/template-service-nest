import { Module } from "@nestjs/common";
import { RootRouteController } from "./controller";
import { RootRouteService } from "./service";

/** Root module. */
@Module({
  controllers: [RootRouteController],
  providers: [RootRouteService],
})
export class RootRouteModule {}
