
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
import { Resource } from "./Resource";
import { ResourceCountArgs } from "./ResourceCountArgs";
import { ResourceFindManyArgs } from "./ResourceFindManyArgs";
import { ResourceFindUniqueArgs } from "./ResourceFindUniqueArgs";
import { CreateResourceArgs } from "./CreateResourceArgs";
import { UpdateResourceArgs } from "./UpdateResourceArgs";
import { DeleteResourceArgs } from "./DeleteResourceArgs";
import { Repair } from "../../repair/base/Repair";
import { Supervisor } from "../../supervisor/base/Supervisor";
import { Admin } from "../../admin/base/Admin";
import { Report } from "../../report/base/Report";
import { ResourceService } from "../resource.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Resource)
export class ResourceResolverBase {
  constructor(
    protected readonly service: ResourceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Resource",
    action: "read",
    possession: "any",
  })
  async _resourcesMeta(
    @graphql.Args() args: ResourceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Resource])
  @nestAccessControl.UseRoles({
    resource: "Resource",
    action: "read",
    possession: "any",
  })
  async resources(
    @graphql.Args() args: ResourceFindManyArgs
  ): Promise<Resource[]> {
    return this.service.resources(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Resource, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Resource",
    action: "read",
    possession: "own",
  })
  async resource(
    @graphql.Args() args: ResourceFindUniqueArgs
  ): Promise<Resource | null> {
    const result = await this.service.resource(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Resource)
  @nestAccessControl.UseRoles({
    resource: "Resource",
    action: "create",
    possession: "any",
  })
  async createResource(
    @graphql.Args() args: CreateResourceArgs
  ): Promise<Resource> {
    return await this.service.createResource({
      ...args,
      data: {
        ...args.data,

        allocation: {
          connect: args.data.allocation,
        },

        supervisors: args.data.supervisors
          ? {
              connect: args.data.supervisors,
            }
          : undefined,

        admin: args.data.admin
          ? {
              connect: args.data.admin,
            }
          : undefined,

        report: args.data.report
          ? {
              connect: args.data.report,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Resource)
  @nestAccessControl.UseRoles({
    resource: "Resource",
    action: "update",
    possession: "any",
  })
  async updateResource(
    @graphql.Args() args: UpdateResourceArgs
  ): Promise<Resource | null> {
    try {
      return await this.service.updateResource({
        ...args,
        data: {
          ...args.data,

          allocation: {
            connect: args.data.allocation,
          },

          supervisors: args.data.supervisors
            ? {
                connect: args.data.supervisors,
              }
            : undefined,

          admin: args.data.admin
            ? {
                connect: args.data.admin,
              }
            : undefined,

          report: args.data.report
            ? {
                connect: args.data.report,
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

  @graphql.Mutation(() => Resource)
  @nestAccessControl.UseRoles({
    resource: "Resource",
    action: "delete",
    possession: "any",
  })
  async deleteResource(
    @graphql.Args() args: DeleteResourceArgs
  ): Promise<Resource | null> {
    try {
      return await this.service.deleteResource(args);
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
  @graphql.ResolveField(() => Repair, {
    nullable: true,
    name: "allocation",
  })
  @nestAccessControl.UseRoles({
    resource: "Repair",
    action: "read",
    possession: "any",
  })
  async getAllocation(
    @graphql.Parent() parent: Resource
  ): Promise<Repair | null> {
    const result = await this.service.getAllocation(parent.id);

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
    @graphql.Parent() parent: Resource
  ): Promise<Supervisor | null> {
    const result = await this.service.getSupervisors(parent.id);

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
  async getAdmin(@graphql.Parent() parent: Resource): Promise<Admin | null> {
    const result = await this.service.getAdmin(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Report, {
    nullable: true,
    name: "report",
  })
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "read",
    possession: "any",
  })
  async getReport(@graphql.Parent() parent: Resource): Promise<Report | null> {
    const result = await this.service.getReport(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
