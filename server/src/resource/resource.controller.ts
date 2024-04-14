import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ResourceService } from "./resource.service";
import { ResourceControllerBase } from "./base/resource.controller.base";

@swagger.ApiTags("resources")
@common.Controller("resources")
export class ResourceController extends ResourceControllerBase {
  constructor(
    protected readonly service: ResourceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
