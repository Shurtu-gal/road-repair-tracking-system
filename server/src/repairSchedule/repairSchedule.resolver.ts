import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RepairScheduleResolverBase } from "./base/repairSchedule.resolver.base";
import { RepairSchedule } from "./base/RepairSchedule";
import { RepairScheduleService } from "./repairSchedule.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RepairSchedule)
export class RepairScheduleResolver extends RepairScheduleResolverBase {
  constructor(
    protected readonly service: RepairScheduleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
