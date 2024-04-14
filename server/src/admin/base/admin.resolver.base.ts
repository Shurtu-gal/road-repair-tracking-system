
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
import { Admin } from "./Admin";
import { AdminCountArgs } from "./AdminCountArgs";
import { AdminFindManyArgs } from "./AdminFindManyArgs";
import { AdminFindUniqueArgs } from "./AdminFindUniqueArgs";
import { CreateAdminArgs } from "./CreateAdminArgs";
import { UpdateAdminArgs } from "./UpdateAdminArgs";
import { DeleteAdminArgs } from "./DeleteAdminArgs";
import { SupervisorFindManyArgs } from "../../supervisor/base/SupervisorFindManyArgs";
import { Supervisor } from "../../supervisor/base/Supervisor";
import { ResourceFindManyArgs } from "../../resource/base/ResourceFindManyArgs";
import { Resource } from "../../resource/base/Resource";
import { RepairScheduleFindManyArgs } from "../../repairSchedule/base/RepairScheduleFindManyArgs";
import { RepairSchedule } from "../../repairSchedule/base/RepairSchedule";
import { Mayor } from "../../mayor/base/Mayor";
import { User } from "../../user/base/User";
import { AdminService } from "../admin.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Admin)
export class AdminResolverBase {
  constructor(
    protected readonly service: AdminService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Admin",
    action: "read",
    possession: "any",
  })
  async _adminsMeta(
    @graphql.Args() args: AdminCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Admin])
  @nestAccessControl.UseRoles({
    resource: "Admin",
    action: "read",
    possession: "any",
  })
  async admins(@graphql.Args() args: AdminFindManyArgs): Promise<Admin[]> {
    return this.service.admins(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Admin, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Admin",
    action: "read",
    possession: "own",
  })
  async admin(
    @graphql.Args() args: AdminFindUniqueArgs
  ): Promise<Admin | null> {
    const result = await this.service.admin(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Admin)
  @nestAccessControl.UseRoles({
    resource: "Admin",
    action: "create",
    possession: "any",
  })
  async createAdmin(@graphql.Args() args: CreateAdminArgs): Promise<Admin> {
    return await this.service.createAdmin({
      ...args,
      data: {
        ...args.data,

        mayor: {
          connect: args.data.mayor,
        },

        user: {
          connect: args.data.user,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Admin)
  @nestAccessControl.UseRoles({
    resource: "Admin",
    action: "update",
    possession: "any",
  })
  async updateAdmin(
    @graphql.Args() args: UpdateAdminArgs
  ): Promise<Admin | null> {
    try {
      return await this.service.updateAdmin({
        ...args,
        data: {
          ...args.data,

          mayor: {
            connect: args.data.mayor,
          },

          user: {
            connect: args.data.user,
          },
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

  @graphql.Mutation(() => Admin)
  @nestAccessControl.UseRoles({
    resource: "Admin",
    action: "delete",
    possession: "any",
  })
  async deleteAdmin(
    @graphql.Args() args: DeleteAdminArgs
  ): Promise<Admin | null> {
    try {
      return await this.service.deleteAdmin(args);
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
    @graphql.Parent() parent: Admin,
    @graphql.Args() args: SupervisorFindManyArgs
  ): Promise<Supervisor[]> {
    const results = await this.service.findSupervisors(parent.id, args);

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
    @graphql.Parent() parent: Admin,
    @graphql.Args() args: ResourceFindManyArgs
  ): Promise<Resource[]> {
    const results = await this.service.findResources(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [RepairSchedule], { name: "repairSchedules" })
  @nestAccessControl.UseRoles({
    resource: "RepairSchedule",
    action: "read",
    possession: "any",
  })
  async findRepairSchedules(
    @graphql.Parent() parent: Admin,
    @graphql.Args() args: RepairScheduleFindManyArgs
  ): Promise<RepairSchedule[]> {
    const results = await this.service.findRepairSchedules(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
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
  async getMayor(@graphql.Parent() parent: Admin): Promise<Mayor | null> {
    const result = await this.service.getMayor(parent.id);

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
  async getUser(@graphql.Parent() parent: Admin): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
