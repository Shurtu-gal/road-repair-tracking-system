import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AreaService } from "./area.service";
import { AreaControllerBase } from "./base/area.controller.base";

@swagger.ApiTags("areas")
@common.Controller("areas")
export class AreaController extends AreaControllerBase {
  constructor(
    protected readonly service: AreaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
