
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
import { Resident } from "./Resident";
import { ResidentCountArgs } from "./ResidentCountArgs";
import { ResidentFindManyArgs } from "./ResidentFindManyArgs";
import { ResidentFindUniqueArgs } from "./ResidentFindUniqueArgs";
import { CreateResidentArgs } from "./CreateResidentArgs";
import { UpdateResidentArgs } from "./UpdateResidentArgs";
import { DeleteResidentArgs } from "./DeleteResidentArgs";
import { ComplaintFindManyArgs } from "../../complaint/base/ComplaintFindManyArgs";
import { Complaint } from "../../complaint/base/Complaint";
import { UpdateFindManyArgs } from "../../update/base/UpdateFindManyArgs";
import { Update } from "../../update/base/Update";
import { Area } from "../../area/base/Area";
import { User } from "../../user/base/User";
import { ResidentService } from "../resident.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Resident)
export class ResidentResolverBase {
  constructor(
    protected readonly service: ResidentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Resident",
    action: "read",
    possession: "any",
  })
  async _residentsMeta(
    @graphql.Args() args: ResidentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Resident])
  @nestAccessControl.UseRoles({
    resource: "Resident",
    action: "read",
    possession: "any",
  })
  async residents(
    @graphql.Args() args: ResidentFindManyArgs
  ): Promise<Resident[]> {
    return this.service.residents(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Resident, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Resident",
    action: "read",
    possession: "own",
  })
  async resident(
    @graphql.Args() args: ResidentFindUniqueArgs
  ): Promise<Resident | null> {
    const result = await this.service.resident(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Resident)
  @nestAccessControl.UseRoles({
    resource: "Resident",
    action: "create",
    possession: "any",
  })
  async createResident(
    @graphql.Args() args: CreateResidentArgs
  ): Promise<Resident> {
    return await this.service.createResident({
      ...args,
      data: {
        ...args.data,

        area: {
          connect: args.data.area,
        },

        user: {
          connect: args.data.user,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Resident)
  @nestAccessControl.UseRoles({
    resource: "Resident",
    action: "update",
    possession: "any",
  })
  async updateResident(
    @graphql.Args() args: UpdateResidentArgs
  ): Promise<Resident | null> {
    try {
      return await this.service.updateResident({
        ...args,
        data: {
          ...args.data,

          area: {
            connect: args.data.area,
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

  @graphql.Mutation(() => Resident)
  @nestAccessControl.UseRoles({
    resource: "Resident",
    action: "delete",
    possession: "any",
  })
  async deleteResident(
    @graphql.Args() args: DeleteResidentArgs
  ): Promise<Resident | null> {
    try {
      return await this.service.deleteResident(args);
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
    @graphql.Parent() parent: Resident,
    @graphql.Args() args: ComplaintFindManyArgs
  ): Promise<Complaint[]> {
    const results = await this.service.findComplaints(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Update], { name: "updates" })
  @nestAccessControl.UseRoles({
    resource: "Update",
    action: "read",
    possession: "any",
  })
  async findUpdates(
    @graphql.Parent() parent: Resident,
    @graphql.Args() args: UpdateFindManyArgs
  ): Promise<Update[]> {
    const results = await this.service.findUpdates(parent.id, args);

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
  async getArea(@graphql.Parent() parent: Resident): Promise<Area | null> {
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
  async getUser(@graphql.Parent() parent: Resident): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
