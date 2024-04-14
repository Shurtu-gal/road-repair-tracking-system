import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RepairScheduleService } from "./repairSchedule.service";
import { RepairScheduleControllerBase } from "./base/repairSchedule.controller.base";

@swagger.ApiTags("repairSchedules")
@common.Controller("repairSchedules")
export class RepairScheduleController extends RepairScheduleControllerBase {
  constructor(
    protected readonly service: RepairScheduleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
