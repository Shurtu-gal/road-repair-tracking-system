
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
import { Repair } from "./Repair";
import { RepairCountArgs } from "./RepairCountArgs";
import { RepairFindManyArgs } from "./RepairFindManyArgs";
import { RepairFindUniqueArgs } from "./RepairFindUniqueArgs";
import { CreateRepairArgs } from "./CreateRepairArgs";
import { UpdateRepairArgs } from "./UpdateRepairArgs";
import { DeleteRepairArgs } from "./DeleteRepairArgs";
import { ComplaintFindManyArgs } from "../../complaint/base/ComplaintFindManyArgs";
import { Complaint } from "../../complaint/base/Complaint";
import { ResourceFindManyArgs } from "../../resource/base/ResourceFindManyArgs";
import { Resource } from "../../resource/base/Resource";
import { User } from "../../user/base/User";
import { Area } from "../../area/base/Area";
import { Supervisor } from "../../supervisor/base/Supervisor";
import { RepairSchedule } from "../../repairSchedule/base/RepairSchedule";
import { RepairService } from "../repair.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Repair)
export class RepairResolverBase {
  constructor(
    protected readonly service: RepairService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Repair",
    action: "read",
    possession: "any",
  })
  async _repairsMeta(
    @graphql.Args() args: RepairCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Repair])
  @nestAccessControl.UseRoles({
    resource: "Repair",
    action: "read",
    possession: "any",
  })
  async repairs(@graphql.Args() args: RepairFindManyArgs): Promise<Repair[]> {
    return this.service.repairs(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Repair, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Repair",
    action: "read",
    possession: "own",
  })
  async repair(
    @graphql.Args() args: RepairFindUniqueArgs
  ): Promise<Repair | null> {
    const result = await this.service.repair(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Repair)
  @nestAccessControl.UseRoles({
    resource: "Repair",
    action: "create",
    possession: "any",
  })
  async createRepair(@graphql.Args() args: CreateRepairArgs): Promise<Repair> {
    return await this.service.createRepair({
      ...args,
      data: {
        ...args.data,

        assignedTo: {
          connect: args.data.assignedTo,
        },

        area: {
          connect: args.data.area,
        },

        supervisors: args.data.supervisors
          ? {
              connect: args.data.supervisors,
            }
          : undefined,

        repairSchedule: args.data.repairSchedule
          ? {
              connect: args.data.repairSchedule,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Repair)
  @nestAccessControl.UseRoles({
    resource: "Repair",
    action: "update",
    possession: "any",
  })
  async updateRepair(
    @graphql.Args() args: UpdateRepairArgs
  ): Promise<Repair | null> {
    try {
      return await this.service.updateRepair({
        ...args,
        data: {
          ...args.data,

          assignedTo: {
            connect: args.data.assignedTo,
          },

          area: {
            connect: args.data.area,
          },

          supervisors: args.data.supervisors
            ? {
                connect: args.data.supervisors,
              }
            : undefined,

          repairSchedule: args.data.repairSchedule
            ? {
                connect: args.data.repairSchedule,
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

  @graphql.Mutation(() => Repair)
  @nestAccessControl.UseRoles({
    resource: "Repair",
    action: "delete",
    possession: "any",
  })
  async deleteRepair(
    @graphql.Args() args: DeleteRepairArgs
  ): Promise<Repair | null> {
    try {
      return await this.service.deleteRepair(args);
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
    @graphql.Parent() parent: Repair,
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
    @graphql.Parent() parent: Repair,
    @graphql.Args() args: ResourceFindManyArgs
  ): Promise<Resource[]> {
    const results = await this.service.findResources(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "assignedTo",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getAssignedTo(@graphql.Parent() parent: Repair): Promise<User | null> {
    const result = await this.service.getAssignedTo(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Area, {
    nullable: true,
    name: "area",
  })
  @nestAccessControl.UseRoles({
    resource: "Area",
    action: "read",
    possession: "any",
  })
  async getArea(@graphql.Parent() parent: Repair): Promise<Area | null> {
    const result = await this.service.getArea(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Supervisor, {
    nullable: true,
    name: "supervisors",
  })
  @nestAccessControl.UseRoles({
    resource: "Supervisor",
    action: "read",
    possession: "any",
  })
  async getSupervisors(
    @graphql.Parent() parent: Repair
  ): Promise<Supervisor | null> {
    const result = await this.service.getSupervisors(parent.id);

    if (!result) {
      return null;
    }
    return result;
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
    @graphql.Parent() parent: Repair
  ): Promise<RepairSchedule | null> {
    const result = await this.service.getRepairSchedule(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
