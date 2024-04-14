
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
import { Complaint } from "./Complaint";
import { ComplaintCountArgs } from "./ComplaintCountArgs";
import { ComplaintFindManyArgs } from "./ComplaintFindManyArgs";
import { ComplaintFindUniqueArgs } from "./ComplaintFindUniqueArgs";
import { CreateComplaintArgs } from "./CreateComplaintArgs";
import { UpdateComplaintArgs } from "./UpdateComplaintArgs";
import { DeleteComplaintArgs } from "./DeleteComplaintArgs";
import { Area } from "../../area/base/Area";
import { User } from "../../user/base/User";
import { Resident } from "../../resident/base/Resident";
import { Repair } from "../../repair/base/Repair";
import { Report } from "../../report/base/Report";
import { Update } from "../../update/base/Update";
import { ComplaintService } from "../complaint.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Complaint)
export class ComplaintResolverBase {
  constructor(
    protected readonly service: ComplaintService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Complaint",
    action: "read",
    possession: "any",
  })
  async _complaintsMeta(
    @graphql.Args() args: ComplaintCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Complaint])
  @nestAccessControl.UseRoles({
    resource: "Complaint",
    action: "read",
    possession: "any",
  })
  async complaints(
    @graphql.Args() args: ComplaintFindManyArgs
  ): Promise<Complaint[]> {
    return this.service.complaints(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Complaint, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Complaint",
    action: "read",
    possession: "own",
  })
  async complaint(
    @graphql.Args() args: ComplaintFindUniqueArgs
  ): Promise<Complaint | null> {
    const result = await this.service.complaint(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Complaint)
  @nestAccessControl.UseRoles({
    resource: "Complaint",
    action: "create",
    possession: "any",
  })
  async createComplaint(
    @graphql.Args() args: CreateComplaintArgs
  ): Promise<Complaint> {
    return await this.service.createComplaint({
      ...args,
      data: {
        ...args.data,

        area: {
          connect: args.data.area,
        },

        user: {
          connect: args.data.user,
        },

        residents: args.data.residents
          ? {
              connect: args.data.residents,
            }
          : undefined,

        repair: args.data.repair
          ? {
              connect: args.data.repair,
            }
          : undefined,

        report: args.data.report
          ? {
              connect: args.data.report,
            }
          : undefined,

        update: args.data.update
          ? {
              connect: args.data.update,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Complaint)
  @nestAccessControl.UseRoles({
    resource: "Complaint",
    action: "update",
    possession: "any",
  })
  async updateComplaint(
    @graphql.Args() args: UpdateComplaintArgs
  ): Promise<Complaint | null> {
    try {
      return await this.service.updateComplaint({
        ...args,
        data: {
          ...args.data,

          area: {
            connect: args.data.area,
          },

          user: {
            connect: args.data.user,
          },

          residents: args.data.residents
            ? {
                connect: args.data.residents,
              }
            : undefined,

          repair: args.data.repair
            ? {
                connect: args.data.repair,
              }
            : undefined,

          report: args.data.report
            ? {
                connect: args.data.report,
              }
            : undefined,

          update: args.data.update
            ? {
                connect: args.data.update,
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

  @graphql.Mutation(() => Complaint)
  @nestAccessControl.UseRoles({
    resource: "Complaint",
    action: "delete",
    possession: "any",
  })
  async deleteComplaint(
    @graphql.Args() args: DeleteComplaintArgs
  ): Promise<Complaint | null> {
    try {
      return await this.service.deleteComplaint(args);
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
  @graphql.ResolveField(() => Area, {
    nullable: true,
    name: "area",
  })
  @nestAccessControl.UseRoles({
    resource: "Area",
    action: "read",
    possession: "any",
  })
  async getArea(@graphql.Parent() parent: Complaint): Promise<Area | null> {
    const result = await this.service.getArea(parent.id);

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
  async getUser(@graphql.Parent() parent: Complaint): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

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
    @graphql.Parent() parent: Complaint
  ): Promise<Resident | null> {
    const result = await this.service.getResidents(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Repair, {
    nullable: true,
    name: "repair",
  })
  @nestAccessControl.UseRoles({
    resource: "Repair",
    action: "read",
    possession: "any",
  })
  async getRepair(@graphql.Parent() parent: Complaint): Promise<Repair | null> {
    const result = await this.service.getRepair(parent.id);

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
  async getReport(@graphql.Parent() parent: Complaint): Promise<Report | null> {
    const result = await this.service.getReport(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Update, {
    nullable: true,
    name: "update",
  })
  @nestAccessControl.UseRoles({
    resource: "Update",
    action: "read",
    possession: "any",
  })
  async getUpdate(@graphql.Parent() parent: Complaint): Promise<Update | null> {
    const result = await this.service.getUpdate(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
