
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
import { Update } from "./Update";
import { UpdateCountArgs } from "./UpdateCountArgs";
import { UpdateFindManyArgs } from "./UpdateFindManyArgs";
import { UpdateFindUniqueArgs } from "./UpdateFindUniqueArgs";
import { CreateUpdateArgs } from "./CreateUpdateArgs";
import { UpdateUpdateArgs } from "./UpdateUpdateArgs";
import { DeleteUpdateArgs } from "./DeleteUpdateArgs";
import { ComplaintFindManyArgs } from "../../complaint/base/ComplaintFindManyArgs";
import { Complaint } from "../../complaint/base/Complaint";
import { Report } from "../../report/base/Report";
import { Resident } from "../../resident/base/Resident";
import { UpdateService } from "../update.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Update)
export class UpdateResolverBase {
  constructor(
    protected readonly service: UpdateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Update",
    action: "read",
    possession: "any",
  })
  async _updatesMeta(
    @graphql.Args() args: UpdateCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Update])
  @nestAccessControl.UseRoles({
    resource: "Update",
    action: "read",
    possession: "any",
  })
  async updates(@graphql.Args() args: UpdateFindManyArgs): Promise<Update[]> {
    return this.service.updates(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Update, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Update",
    action: "read",
    possession: "own",
  })
  async update(
    @graphql.Args() args: UpdateFindUniqueArgs
  ): Promise<Update | null> {
    const result = await this.service.update(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Update)
  @nestAccessControl.UseRoles({
    resource: "Update",
    action: "create",
    possession: "any",
  })
  async createUpdate(@graphql.Args() args: CreateUpdateArgs): Promise<Update> {
    return await this.service.createUpdate({
      ...args,
      data: {
        ...args.data,

        report: {
          connect: args.data.report,
        },

        residents: args.data.residents
          ? {
              connect: args.data.residents,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Update)
  @nestAccessControl.UseRoles({
    resource: "Update",
    action: "update",
    possession: "any",
  })
  async updateUpdate(
    @graphql.Args() args: UpdateUpdateArgs
  ): Promise<Update | null> {
    try {
      return await this.service.updateUpdate({
        ...args,
        data: {
          ...args.data,

          report: {
            connect: args.data.report,
          },

          residents: args.data.residents
            ? {
                connect: args.data.residents,
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

  @graphql.Mutation(() => Update)
  @nestAccessControl.UseRoles({
    resource: "Update",
    action: "delete",
    possession: "any",
  })
  async deleteUpdate(
    @graphql.Args() args: DeleteUpdateArgs
  ): Promise<Update | null> {
    try {
      return await this.service.deleteUpdate(args);
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
    @graphql.Parent() parent: Update,
    @graphql.Args() args: ComplaintFindManyArgs
  ): Promise<Complaint[]> {
    const results = await this.service.findComplaints(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
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
  async getReport(@graphql.Parent() parent: Update): Promise<Report | null> {
    const result = await this.service.getReport(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Resident, {
    nullable: true,
    name: "residents",
  })
  @nestAccessControl.UseRoles({
    resource: "Resident",
    action: "read",
    possession: "any",
  })
  async getResidents(
    @graphql.Parent() parent: Update
  ): Promise<Resident | null> {
    const result = await this.service.getResidents(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
