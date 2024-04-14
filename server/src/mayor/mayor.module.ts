import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MayorModuleBase } from "./base/mayor.module.base";
import { MayorService } from "./mayor.service";
import { MayorController } from "./mayor.controller";
import { MayorResolver } from "./mayor.resolver";

@Module({
  imports: [MayorModuleBase, forwardRef(() => AuthModule)],
  controllers: [MayorController],
  providers: [MayorService, MayorResolver],
  exports: [MayorService],
})
export class MayorModule {}
