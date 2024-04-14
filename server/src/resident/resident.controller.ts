import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ResidentService } from "./resident.service";
import { ResidentControllerBase } from "./base/resident.controller.base";

@swagger.ApiTags("residents")
@common.Controller("residents")
export class ResidentController extends ResidentControllerBase {
  constructor(
    protected readonly service: ResidentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
