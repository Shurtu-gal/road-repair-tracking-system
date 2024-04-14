import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RepairScheduleModuleBase } from "./base/repairSchedule.module.base";
import { RepairScheduleService } from "./repairSchedule.service";
import { RepairScheduleController } from "./repairSchedule.controller";
import { RepairScheduleResolver } from "./repairSchedule.resolver";

@Module({
  imports: [RepairScheduleModuleBase, forwardRef(() => AuthModule)],
  controllers: [RepairScheduleController],
  providers: [RepairScheduleService, RepairScheduleResolver],
  exports: [RepairScheduleService],
})
export class RepairScheduleModule {}
