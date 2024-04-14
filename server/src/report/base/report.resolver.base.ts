
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
import { Report } from "./Report";
import { ReportCountArgs } from "./ReportCountArgs";
import { ReportFindManyArgs } from "./ReportFindManyArgs";
import { ReportFindUniqueArgs } from "./ReportFindUniqueArgs";
import { CreateReportArgs } from "./CreateReportArgs";
import { UpdateReportArgs } from "./UpdateReportArgs";
import { DeleteReportArgs } from "./DeleteReportArgs";
import { ComplaintFindManyArgs } from "../../complaint/base/ComplaintFindManyArgs";
import { Complaint } from "../../complaint/base/Complaint";
import { ResourceFindManyArgs } from "../../resource/base/ResourceFindManyArgs";
import { Resource } from "../../resource/base/Resource";
import { UpdateFindManyArgs } from "../../update/base/UpdateFindManyArgs";
import { Update } from "../../update/base/Update";
import { RepairSchedule } from "../../repairSchedule/base/RepairSchedule";
import { Mayor } from "../../mayor/base/Mayor";
import { ReportService } from "../report.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Report)
export class ReportResolverBase {
  constructor(
    protected readonly service: ReportService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "read",
    possession: "any",
  })
  async _reportsMeta(
    @graphql.Args() args: ReportCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Report])
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "read",
    possession: "any",
  })
  async reports(@graphql.Args() args: ReportFindManyArgs): Promise<Report[]> {
    return this.service.reports(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Report, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "read",
    possession: "own",
  })
  async report(
    @graphql.Args() args: ReportFindUniqueArgs
  ): Promise<Report | null> {
    const result = await this.service.report(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Report)
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "create",
    possession: "any",
  })
  async createReport(@graphql.Args() args: CreateReportArgs): Promise<Report> {
    return await this.service.createReport({
      ...args,
      data: {
        ...args.data,

        repairSchedule: {
          connect: args.data.repairSchedule,
        },

        mayor: args.data.mayor
          ? {
              connect: args.data.mayor,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Report)
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "update",
    possession: "any",
  })
  async updateReport(
    @graphql.Args() args: UpdateReportArgs
  ): Promise<Report | null> {
    try {
      return await this.service.updateReport({
        ...args,
        data: {
          ...args.data,

          repairSchedule: {
            connect: args.data.repairSchedule,
          },

          mayor: args.data.mayor
            ? {
                connect: args.data.mayor,
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

  @graphql.Mutation(() => Report)
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "delete",
    possession: "any",
  })
  async deleteReport(
    @graphql.Args() args: DeleteReportArgs
  ): Promise<Report | null> {
    try {
      return await this.service.deleteReport(args);
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
  @graphql.ResolveField(() => [Complaint], { name: "complaints" })
  @nestAccessControl.UseRoles({
    resource: "Complaint",
    action: "read",
    possession: "any",
  })
  async findComplaints(
    @graphql.Parent() parent: Report,
    @graphql.Args() args: ComplaintFindManyArgs
  ): Promise<Complaint[]> {
    const results = await this.service.findComplaints(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Resource], { name: "resources" })
  @nestAccessControl.UseRoles({
    resource: "Resource",
    action: "read",
    possession: "any",
  })
  async findResources(
    @graphql.Parent() parent: Report,
    @graphql.Args() args: ResourceFindManyArgs
  ): Promise<Resource[]> {
    const results = await this.service.findResources(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Update], { name: "update" })
  @nestAccessControl.UseRoles({
    resource: "Update",
    action: "read",
    possession: "any",
  })
  async findUpdate(
    @graphql.Parent() parent: Report,
    @graphql.Args() args: UpdateFindManyArgs
  ): Promise<Update[]> {
    const results = await this.service.findUpdate(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => RepairSchedule, {
    nullable: true,
    name: "repairSchedule",
  })
  @nestAccessControl.UseRoles({
    resource: "RepairSchedule",
    action: "read",
    possession: "any",
  })
  async getRepairSchedule(
    @graphql.Parent() parent: Report
  ): Promise<RepairSchedule | null> {
    const result = await this.service.getRepairSchedule(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Mayor, {
    nullable: true,
    name: "mayor",
  })
  @nestAccessControl.UseRoles({
    resource: "Mayor",
    action: "read",
    possession: "any",
  })
  async getMayor(@graphql.Parent() parent: Report): Promise<Mayor | null> {
    const result = await this.service.getMayor(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
