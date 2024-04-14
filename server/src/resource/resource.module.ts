import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ResourceModuleBase } from "./base/resource.module.base";
import { ResourceService } from "./resource.service";
import { ResourceController } from "./resource.controller";
import { ResourceResolver } from "./resource.resolver";

@Module({
  imports: [ResourceModuleBase, forwardRef(() => AuthModule)],
  controllers: [ResourceController],
  providers: [ResourceService, ResourceResolver],
  exports: [ResourceService],
})
export class ResourceModule {}
