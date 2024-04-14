import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SupervisorService } from "./supervisor.service";
import { SupervisorControllerBase } from "./base/supervisor.controller.base";

@swagger.ApiTags("supervisors")
@common.Controller("supervisors")
export class SupervisorController extends SupervisorControllerBase {
  constructor(
    protected readonly service: SupervisorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
