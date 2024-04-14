import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ComplaintService } from "./complaint.service";
import { ComplaintControllerBase } from "./base/complaint.controller.base";

@swagger.ApiTags("complaints")
@common.Controller("complaints")
export class ComplaintController extends ComplaintControllerBase {
  constructor(
    protected readonly service: ComplaintService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
