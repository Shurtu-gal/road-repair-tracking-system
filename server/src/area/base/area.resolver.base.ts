
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
import { Area } from "./Area";
import { AreaCountArgs } from "./AreaCountArgs";
import { AreaFindManyArgs } from "./AreaFindManyArgs";
import { AreaFindUniqueArgs } from "./AreaFindUniqueArgs";
import { CreateAreaArgs } from "./CreateAreaArgs";
import { UpdateAreaArgs } from "./UpdateAreaArgs";
import { DeleteAreaArgs } from "./DeleteAreaArgs";
import { ResidentFindManyArgs } from "../../resident/base/ResidentFindManyArgs";
import { Resident } from "../../resident/base/Resident";
import { SupervisorFindManyArgs } from "../../supervisor/base/SupervisorFindManyArgs";
import { Supervisor } from "../../supervisor/base/Supervisor";
import { ComplaintFindManyArgs } from "../../complaint/base/ComplaintFindManyArgs";
import { Complaint } from "../../complaint/base/Complaint";
import { RepairFindManyArgs } from "../../repair/base/RepairFindManyArgs";
import { Repair } from "../../repair/base/Repair";
import { AreaService } from "../area.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Area)
export class AreaResolverBase {
  constructor(
    protected readonly service: AreaService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Area",
    action: "read",
    possession: "any",
  })
  async _areasMeta(
    @graphql.Args() args: AreaCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Area])
  @nestAccessControl.UseRoles({
    resource: "Area",
    action: "read",
    possession: "any",
  })
  async areas(@graphql.Args() args: AreaFindManyArgs): Promise<Area[]> {
    return this.service.areas(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Area, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Area",
    action: "read",
    possession: "own",
  })
  async area(@graphql.Args() args: AreaFindUniqueArgs): Promise<Area | null> {
    const result = await this.service.area(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Area)
  @nestAccessControl.UseRoles({
    resource: "Area",
    action: "create",
    possession: "any",
  })
  async createArea(@graphql.Args() args: CreateAreaArgs): Promise<Area> {
    return await this.service.createArea({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Area)
  @nestAccessControl.UseRoles({
    resource: "Area",
    action: "update",
    possession: "any",
  })
  async updateArea(@graphql.Args() args: UpdateAreaArgs): Promise<Area | null> {
    try {
      return await this.service.updateArea({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Area)
  @nestAccessControl.UseRoles({
    resource: "Area",
    action: "delete",
    possession: "any",
  })
  async deleteArea(@graphql.Args() args: DeleteAreaArgs): Promise<Area | null> {
    try {
      return await this.service.deleteArea(args);
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
  @graphql.ResolveField(() => [Resident], { name: "residents" })
  @nestAccessControl.UseRoles({
    resource: "Resident",
    action: "read",
    possession: "any",
  })
  async findResidents(
    @graphql.Parent() parent: Area,
    @graphql.Args() args: ResidentFindManyArgs
  ): Promise<Resident[]> {
    const results = await this.service.findResidents(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Supervisor], { name: "supervisors" })
  @nestAccessControl.UseRoles({
    resource: "Supervisor",
    action: "read",
    possession: "any",
  })
  async findSupervisors(
    @graphql.Parent() parent: Area,
    @graphql.Args() args: SupervisorFindManyArgs
  ): Promise<Supervisor[]> {
    const results = await this.service.findSupervisors(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Complaint], { name: "complaint" })
  @nestAccessControl.UseRoles({
    resource: "Complaint",
    action: "read",
    possession: "any",
  })
  async findComplaint(
    @graphql.Parent() parent: Area,
    @graphql.Args() args: ComplaintFindManyArgs
  ): Promise<Complaint[]> {
    const results = await this.service.findComplaint(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Repair], { name: "repair" })
  @nestAccessControl.UseRoles({
    resource: "Repair",
    action: "read",
    possession: "any",
  })
  async findRepair(
    @graphql.Parent() parent: Area,
    @graphql.Args() args: RepairFindManyArgs
  ): Promise<Repair[]> {
    const results = await this.service.findRepair(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
