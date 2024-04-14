import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ResidentModuleBase } from "./base/resident.module.base";
import { ResidentService } from "./resident.service";
import { ResidentController } from "./resident.controller";
import { ResidentResolver } from "./resident.resolver";

@Module({
  imports: [ResidentModuleBase, forwardRef(() => AuthModule)],
  controllers: [ResidentController],
  providers: [ResidentService, ResidentResolver],
  exports: [ResidentService],
})
export class ResidentModule {}
