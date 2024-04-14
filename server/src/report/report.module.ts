import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReportModuleBase } from "./base/report.module.base";
import { ReportService } from "./report.service";
import { ReportController } from "./report.controller";
import { ReportResolver } from "./report.resolver";

@Module({
  imports: [ReportModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReportController],
  providers: [ReportService, ReportResolver],
  exports: [ReportService],
})
export class ReportModule {}
