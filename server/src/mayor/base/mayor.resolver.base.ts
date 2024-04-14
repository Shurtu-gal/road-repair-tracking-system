
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
import { Mayor } from "./Mayor";
import { MayorCountArgs } from "./MayorCountArgs";
import { MayorFindManyArgs } from "./MayorFindManyArgs";
import { MayorFindUniqueArgs } from "./MayorFindUniqueArgs";
import { CreateMayorArgs } from "./CreateMayorArgs";
import { UpdateMayorArgs } from "./UpdateMayorArgs";
import { DeleteMayorArgs } from "./DeleteMayorArgs";
import { AdminFindManyArgs } from "../../admin/base/AdminFindManyArgs";
import { Admin } from "../../admin/base/Admin";
import { ReportFindManyArgs } from "../../report/base/ReportFindManyArgs";
import { Report } from "../../report/base/Report";
import { User } from "../../user/base/User";
import { MayorService } from "../mayor.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Mayor)
export class MayorResolverBase {
  constructor(
    protected readonly service: MayorService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Mayor",
    action: "read",
    possession: "any",
  })
  async _mayorsMeta(
    @graphql.Args() args: MayorCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Mayor])
  @nestAccessControl.UseRoles({
    resource: "Mayor",
    action: "read",
    possession: "any",
  })
  async mayors(@graphql.Args() args: MayorFindManyArgs): Promise<Mayor[]> {
    return this.service.mayors(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Mayor, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Mayor",
    action: "read",
    possession: "own",
  })
  async mayor(
    @graphql.Args() args: MayorFindUniqueArgs
  ): Promise<Mayor | null> {
    const result = await this.service.mayor(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Mayor)
  @nestAccessControl.UseRoles({
    resource: "Mayor",
    action: "create",
    possession: "any",
  })
  async createMayor(@graphql.Args() args: CreateMayorArgs): Promise<Mayor> {
    return await this.service.createMayor({
      ...args,
      data: {
        ...args.data,

        user: {
          connect: args.data.user,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Mayor)
  @nestAccessControl.UseRoles({
    resource: "Mayor",
    action: "update",
    possession: "any",
  })
  async updateMayor(
    @graphql.Args() args: UpdateMayorArgs
  ): Promise<Mayor | null> {
    try {
      return await this.service.updateMayor({
        ...args,
        data: {
          ...args.data,

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

  @graphql.Mutation(() => Mayor)
  @nestAccessControl.UseRoles({
    resource: "Mayor",
    action: "delete",
    possession: "any",
  })
  async deleteMayor(
    @graphql.Args() args: DeleteMayorArgs
  ): Promise<Mayor | null> {
    try {
      return await this.service.deleteMayor(args);
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
  @graphql.ResolveField(() => [Admin], { name: "admin" })
  @nestAccessControl.UseRoles({
    resource: "Admin",
    action: "read",
    possession: "any",
  })
  async findAdmin(
    @graphql.Parent() parent: Mayor,
    @graphql.Args() args: AdminFindManyArgs
  ): Promise<Admin[]> {
    const results = await this.service.findAdmin(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Report], { name: "reports" })
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "read",
    possession: "any",
  })
  async findReports(
    @graphql.Parent() parent: Mayor,
    @graphql.Args() args: ReportFindManyArgs
  ): Promise<Report[]> {
    const results = await this.service.findReports(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
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
  async getUser(@graphql.Parent() parent: Mayor): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
