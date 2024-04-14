import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SupervisorModuleBase } from "./base/supervisor.module.base";
import { SupervisorService } from "./supervisor.service";
import { SupervisorController } from "./supervisor.controller";
import { SupervisorResolver } from "./supervisor.resolver";

@Module({
  imports: [SupervisorModuleBase, forwardRef(() => AuthModule)],
  controllers: [SupervisorController],
  providers: [SupervisorService, SupervisorResolver],
  exports: [SupervisorService],
})
export class SupervisorModule {}
