import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ComplaintModuleBase } from "./base/complaint.module.base";
import { ComplaintService } from "./complaint.service";
import { ComplaintController } from "./complaint.controller";
import { ComplaintResolver } from "./complaint.resolver";

@Module({
  imports: [ComplaintModuleBase, forwardRef(() => AuthModule)],
  controllers: [ComplaintController],
  providers: [ComplaintService, ComplaintResolver],
  exports: [ComplaintService],
})
export class ComplaintModule {}
