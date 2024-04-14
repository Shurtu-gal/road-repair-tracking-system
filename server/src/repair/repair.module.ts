import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RepairModuleBase } from "./base/repair.module.base";
import { RepairService } from "./repair.service";
import { RepairController } from "./repair.controller";
import { RepairResolver } from "./repair.resolver";

@Module({
  imports: [RepairModuleBase, forwardRef(() => AuthModule)],
  controllers: [RepairController],
  providers: [RepairService, RepairResolver],
  exports: [RepairService],
})
export class RepairModule {}
