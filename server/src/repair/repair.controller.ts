import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RepairService } from "./repair.service";
import { RepairControllerBase } from "./base/repair.controller.base";

@swagger.ApiTags("repairs")
@common.Controller("repairs")
export class RepairController extends RepairControllerBase {
  constructor(
    protected readonly service: RepairService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
