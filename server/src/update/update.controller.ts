import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UpdateService } from "./update.service";
import { UpdateControllerBase } from "./base/update.controller.base";

@swagger.ApiTags("updates")
@common.Controller("updates")
export class UpdateController extends UpdateControllerBase {
  constructor(
    protected readonly service: UpdateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
