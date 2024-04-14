
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { RepairSchedule } from "./RepairSchedule";
import { RepairScheduleCountArgs } from "./RepairScheduleCountArgs";
import { RepairScheduleFindManyArgs } from "./RepairScheduleFindManyArgs";
import { RepairScheduleFindUniqueArgs } from "./RepairScheduleFindUniqueArgs";
import { CreateRepairScheduleArgs } from "./CreateRepairScheduleArgs";
import { UpdateRepairScheduleArgs } from "./UpdateRepairScheduleArgs";
import { DeleteRepairScheduleArgs } from "./DeleteRepairScheduleArgs";
import { SupervisorFindManyArgs } from "../../supervisor/base/SupervisorFindManyArgs";
import { Supervisor } from "../../supervisor/base/Supervisor";
import { RepairFindManyArgs } from "../../repair/base/RepairFindManyArgs";
import { Repair } from "../../repair/base/Repair";
import { ReportFindManyArgs } from "../../report/base/ReportFindManyArgs";
import { Report } from "../../report/base/Report";
import { Admin } from "../../admin/base/Admin";
import { RepairScheduleService } from "../repairSchedule.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RepairSchedule)
export class RepairScheduleResolverBase {
  constructor(
    protected readonly service: RepairScheduleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "RepairSchedule",
    action: "read",
    possession: "any",
  })
  async _repairSchedulesMeta(
    @graphql.Args() args: RepairScheduleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [RepairSchedule])
  @nestAccessControl.UseRoles({
    resource: "RepairSchedule",
    action: "read",
    possession: "any",
  })
  async repairSchedules(
    @graphql.Args() args: RepairScheduleFindManyArgs
  ): Promise<RepairSchedule[]> {
    return this.service.repairSchedules(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => RepairSchedule, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "RepairSchedule",
    action: "read",
    possession: "own",
  })
  async repairSchedule(
    @graphql.Args() args: RepairScheduleFindUniqueArgs
  ): Promise<RepairSchedule | null> {
    const result = await this.service.repairSchedule(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => RepairSchedule)
  @nestAccessControl.UseRoles({
    resource: "RepairSchedule",
    action: "create",
    possession: "any",
  })
  async createRepairSchedule(
    @graphql.Args() args: CreateRepairScheduleArgs
  ): Promise<RepairSchedule> {
    return await this.service.createRepairSchedule({
      ...args,
      data: {
        ...args.data,

        admin: args.data.admin
          ? {
              connect: args.data.admin,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => RepairSchedule)
  @nestAccessControl.UseRoles({
    resource: "RepairSchedule",
    action: "update",
    possession: "any",
  })
  async updateRepairSchedule(
    @graphql.Args() args: UpdateRepairScheduleArgs
  ): Promise<RepairSchedule | null> {
    try {
      return await this.service.updateRepairSchedule({
        ...args,
        data: {
          ...args.data,

          admin: args.data.admin
            ? {
                connect: args.data.admin,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => RepairSchedule)
  @nestAccessControl.UseRoles({
    resource: "RepairSchedule",
    action: "delete",
    possession: "any",
  })
  async deleteRepairSchedule(
    @graphql.Args() args: DeleteRepairScheduleArgs
  ): Promise<RepairSchedule | null> {
    try {
      return await this.service.deleteRepairSchedule(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Supervisor], { name: "supervisors" })
  @nestAccessControl.UseRoles({
    resource: "Supervisor",
    action: "read",
    possession: "any",
  })
  async findSupervisors(
    @graphql.Parent() parent: RepairSchedule,
    @graphql.Args() args: SupervisorFindManyArgs
  ): Promise<Supervisor[]> {
    const results = await this.service.findSupervisors(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Repair], { name: "repairs" })
  @nestAccessControl.UseRoles({
    resource: "Repair",
    action: "read",
    possession: "any",
  })
  async findRepairs(
    @graphql.Parent() parent: RepairSchedule,
    @graphql.Args() args: RepairFindManyArgs
  ): Promise<Repair[]> {
    const results = await this.service.findRepairs(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Report], { name: "report" })
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "read",
    possession: "any",
  })
  async findReport(
    @graphql.Parent() parent: RepairSchedule,
    @graphql.Args() args: ReportFindManyArgs
  ): Promise<Report[]> {
    const results = await this.service.findReport(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Admin, {
    nullable: true,
    name: "admin",
  })
  @nestAccessControl.UseRoles({
    resource: "Admin",
    action: "read",
    possession: "any",
  })
  async getAdmin(
    @graphql.Parent() parent: RepairSchedule
  ): Promise<Admin | null> {
    const result = await this.service.getAdmin(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
