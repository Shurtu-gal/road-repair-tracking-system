
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
import { Supervisor } from "./Supervisor";
import { SupervisorCountArgs } from "./SupervisorCountArgs";
import { SupervisorFindManyArgs } from "./SupervisorFindManyArgs";
import { SupervisorFindUniqueArgs } from "./SupervisorFindUniqueArgs";
import { CreateSupervisorArgs } from "./CreateSupervisorArgs";
import { UpdateSupervisorArgs } from "./UpdateSupervisorArgs";
import { DeleteSupervisorArgs } from "./DeleteSupervisorArgs";
import { RepairFindManyArgs } from "../../repair/base/RepairFindManyArgs";
import { Repair } from "../../repair/base/Repair";
import { ResourceFindManyArgs } from "../../resource/base/ResourceFindManyArgs";
import { Resource } from "../../resource/base/Resource";
import { Area } from "../../area/base/Area";
import { RepairSchedule } from "../../repairSchedule/base/RepairSchedule";
import { User } from "../../user/base/User";
import { Admin } from "../../admin/base/Admin";
import { SupervisorService } from "../supervisor.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Supervisor)
export class SupervisorResolverBase {
  constructor(
    protected readonly service: SupervisorService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Supervisor",
    action: "read",
    possession: "any",
  })
  async _supervisorsMeta(
    @graphql.Args() args: SupervisorCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Supervisor])
  @nestAccessControl.UseRoles({
    resource: "Supervisor",
    action: "read",
    possession: "any",
  })
  async supervisors(
    @graphql.Args() args: SupervisorFindManyArgs
  ): Promise<Supervisor[]> {
    return this.service.supervisors(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Supervisor, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Supervisor",
    action: "read",
    possession: "own",
  })
  async supervisor(
    @graphql.Args() args: SupervisorFindUniqueArgs
  ): Promise<Supervisor | null> {
    const result = await this.service.supervisor(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Supervisor)
  @nestAccessControl.UseRoles({
    resource: "Supervisor",
    action: "create",
    possession: "any",
  })
  async createSupervisor(
    @graphql.Args() args: CreateSupervisorArgs
  ): Promise<Supervisor> {
    return await this.service.createSupervisor({
      ...args,
      data: {
        ...args.data,

        area: {
          connect: args.data.area,
        },

        repairSchedule: args.data.repairSchedule
          ? {
              connect: args.data.repairSchedule,
            }
          : undefined,

        user: {
          connect: args.data.user,
        },

        admin: args.data.admin
          ? {
              connect: args.data.admin,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Supervisor)
  @nestAccessControl.UseRoles({
    resource: "Supervisor",
    action: "update",
    possession: "any",
  })
  async updateSupervisor(
    @graphql.Args() args: UpdateSupervisorArgs
  ): Promise<Supervisor | null> {
    try {
      return await this.service.updateSupervisor({
        ...args,
        data: {
          ...args.data,

          area: {
            connect: args.data.area,
          },

          repairSchedule: args.data.repairSchedule
            ? {
                connect: args.data.repairSchedule,
              }
            : undefined,

          user: {
            connect: args.data.user,
          },

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

  @graphql.Mutation(() => Supervisor)
  @nestAccessControl.UseRoles({
    resource: "Supervisor",
    action: "delete",
    possession: "any",
  })
  async deleteSupervisor(
    @graphql.Args() args: DeleteSupervisorArgs
  ): Promise<Supervisor | null> {
    try {
      return await this.service.deleteSupervisor(args);
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
  @graphql.ResolveField(() => [Repair], { name: "repairs" })
  @nestAccessControl.UseRoles({
    resource: "Repair",
    action: "read",
    possession: "any",
  })
  async findRepairs(
    @graphql.Parent() parent: Supervisor,
    @graphql.Args() args: RepairFindManyArgs
  ): Promise<Repair[]> {
    const results = await this.service.findRepairs(parent.id, args);

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
    @graphql.Parent() parent: Supervisor,
    @graphql.Args() args: ResourceFindManyArgs
  ): Promise<Resource[]> {
    const results = await this.service.findResources(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
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
  async getArea(@graphql.Parent() parent: Supervisor): Promise<Area | null> {
    const result = await this.service.getArea(parent.id);

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
    @graphql.Parent() parent: Supervisor
  ): Promise<RepairSchedule | null> {
    const result = await this.service.getRepairSchedule(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Supervisor): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
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
  async getAdmin(@graphql.Parent() parent: Supervisor): Promise<Admin | null> {
    const result = await this.service.getAdmin(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
