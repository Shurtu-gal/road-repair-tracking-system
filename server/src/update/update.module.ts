import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UpdateModuleBase } from "./base/update.module.base";
import { UpdateService } from "./update.service";
import { UpdateController } from "./update.controller";
import { UpdateResolver } from "./update.resolver";

@Module({
  imports: [UpdateModuleBase, forwardRef(() => AuthModule)],
  controllers: [UpdateController],
  providers: [UpdateService, UpdateResolver],
  exports: [UpdateService],
})
export class UpdateModule {}
