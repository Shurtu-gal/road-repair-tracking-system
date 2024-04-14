import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AdminModuleBase } from "./base/admin.module.base";
import { AdminService } from "./admin.service";
import { AdminController } from "./admin.controller";
import { AdminResolver } from "./admin.resolver";

@Module({
  imports: [AdminModuleBase, forwardRef(() => AuthModule)],
  controllers: [AdminController],
  providers: [AdminService, AdminResolver],
  exports: [AdminService],
})
export class AdminModule {}
