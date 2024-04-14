import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MayorService } from "./mayor.service";
import { MayorControllerBase } from "./base/mayor.controller.base";

@swagger.ApiTags("mayors")
@common.Controller("mayors")
export class MayorController extends MayorControllerBase {
  constructor(
    protected readonly service: MayorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
