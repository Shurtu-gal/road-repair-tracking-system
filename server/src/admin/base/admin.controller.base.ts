
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { AdminService } from "../admin.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AdminCreateInput } from "./AdminCreateInput";
import { Admin } from "./Admin";
import { AdminFindManyArgs } from "./AdminFindManyArgs";
import { AdminWhereUniqueInput } from "./AdminWhereUniqueInput";
import { AdminUpdateInput } from "./AdminUpdateInput";
import { SupervisorFindManyArgs } from "../../supervisor/base/SupervisorFindManyArgs";
import { Supervisor } from "../../supervisor/base/Supervisor";
import { SupervisorWhereUniqueInput } from "../../supervisor/base/SupervisorWhereUniqueInput";
import { ResourceFindManyArgs } from "../../resource/base/ResourceFindManyArgs";
import { Resource } from "../../resource/base/Resource";
import { ResourceWhereUniqueInput } from "../../resource/base/ResourceWhereUniqueInput";
import { RepairScheduleFindManyArgs } from "../../repairSchedule/base/RepairScheduleFindManyArgs";
import { RepairSchedule } from "../../repairSchedule/base/RepairSchedule";
import { RepairScheduleWhereUniqueInput } from "../../repairSchedule/base/RepairScheduleWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AdminControllerBase {
  constructor(
    protected readonly service: AdminService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Admin })
  @nestAccessControl.UseRoles({
    resource: "Admin",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createAdmin(@common.Body() data: AdminCreateInput): Promise<Admin> {
    return await this.service.createAdmin({
      data: {
        ...data,

        mayor: {
          connect: data.mayor,
        },

        user: {
          connect: data.user,
        },
      },
      select: {
        id: true,

        mayor: {
          select: {
            id: true,
          },
        },

        user: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        updatedAt: true,
        deletedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Admin] })
  @ApiNestedQuery(AdminFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Admin",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async admins(@common.Req() request: Request): Promise<Admin[]> {
    const args = plainToClass(AdminFindManyArgs, request.query);
    return this.service.admins({
      ...args,
      select: {
        id: true,

        mayor: {
          select: {
            id: true,
          },
        },

        user: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        updatedAt: true,
        deletedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Admin })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Admin",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async admin(
    @common.Param() params: AdminWhereUniqueInput
  ): Promise<Admin | null> {
    const result = await this.service.admin({
      where: params,
      select: {
        id: true,

        mayor: {
          select: {
            id: true,
          },
        },

        user: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        updatedAt: true,
        deletedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Admin })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Admin",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateAdmin(
    @common.Param() params: AdminWhereUniqueInput,
    @common.Body() data: AdminUpdateInput
  ): Promise<Admin | null> {
    try {
      return await this.service.updateAdmin({
        where: params,
        data: {
          ...data,

          mayor: {
            connect: data.mayor,
          },

          user: {
            connect: data.user,
          },
        },
        select: {
          id: true,

          mayor: {
            select: {
              id: true,
            },
          },

          user: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          updatedAt: true,
          deletedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Admin })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Admin",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAdmin(
    @common.Param() params: AdminWhereUniqueInput
  ): Promise<Admin | null> {
    try {
      return await this.service.deleteAdmin({
        where: params,
        select: {
          id: true,

          mayor: {
            select: {
              id: true,
            },
          },

          user: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          updatedAt: true,
          deletedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/supervisors")
  @ApiNestedQuery(SupervisorFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Supervisor",
    action: "read",
    possession: "any",
  })
  async findSupervisors(
    @common.Req() request: Request,
    @common.Param() params: AdminWhereUniqueInput
  ): Promise<Supervisor[]> {
    const query = plainToClass(SupervisorFindManyArgs, request.query);
    const results = await this.service.findSupervisors(params.id, {
      ...query,
      select: {
        id: true,

        area: {
          select: {
            id: true,
          },
        },

        repairSchedule: {
          select: {
            id: true,
          },
        },

        user: {
          select: {
            id: true,
          },
        },

        admin: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        updatedAt: true,
        deletedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/supervisors")
  @nestAccessControl.UseRoles({
    resource: "Admin",
    action: "update",
    possession: "any",
  })
  async connectSupervisors(
    @common.Param() params: AdminWhereUniqueInput,
    @common.Body() body: SupervisorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      supervisors: {
        connect: body,
      },
    };
    await this.service.updateAdmin({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/supervisors")
  @nestAccessControl.UseRoles({
    resource: "Admin",
    action: "update",
    possession: "any",
  })
  async updateSupervisors(
    @common.Param() params: AdminWhereUniqueInput,
    @common.Body() body: SupervisorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      supervisors: {
        set: body,
      },
    };
    await this.service.updateAdmin({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/supervisors")
  @nestAccessControl.UseRoles({
    resource: "Admin",
    action: "update",
    possession: "any",
  })
  async disconnectSupervisors(
    @common.Param() params: AdminWhereUniqueInput,
    @common.Body() body: SupervisorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      supervisors: {
        disconnect: body,
      },
    };
    await this.service.updateAdmin({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/resources")
  @ApiNestedQuery(ResourceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Resource",
    action: "read",
    possession: "any",
  })
  async findResources(
    @common.Req() request: Request,
    @common.Param() params: AdminWhereUniqueInput
  ): Promise<Resource[]> {
    const query = plainToClass(ResourceFindManyArgs, request.query);
    const results = await this.service.findResources(params.id, {
      ...query,
      select: {
        id: true,
        name: true,
        quantity: true,

        allocation: {
          select: {
            id: true,
          },
        },

        price: true,

        supervisors: {
          select: {
            id: true,
          },
        },

        admin: {
          select: {
            id: true,
          },
        },

        report: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        updatedAt: true,
        deletedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/resources")
  @nestAccessControl.UseRoles({
    resource: "Admin",
    action: "update",
    possession: "any",
  })
  async connectResources(
    @common.Param() params: AdminWhereUniqueInput,
    @common.Body() body: ResourceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      resources: {
        connect: body,
      },
    };
    await this.service.updateAdmin({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/resources")
  @nestAccessControl.UseRoles({
    resource: "Admin",
    action: "update",
    possession: "any",
  })
  async updateResources(
    @common.Param() params: AdminWhereUniqueInput,
    @common.Body() body: ResourceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      resources: {
        set: body,
      },
    };
    await this.service.updateAdmin({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/resources")
  @nestAccessControl.UseRoles({
    resource: "Admin",
    action: "update",
    possession: "any",
  })
  async disconnectResources(
    @common.Param() params: AdminWhereUniqueInput,
    @common.Body() body: ResourceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      resources: {
        disconnect: body,
      },
    };
    await this.service.updateAdmin({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/repairSchedules")
  @ApiNestedQuery(RepairScheduleFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "RepairSchedule",
    action: "read",
    possession: "any",
  })
  async findRepairSchedules(
    @common.Req() request: Request,
    @common.Param() params: AdminWhereUniqueInput
  ): Promise<RepairSchedule[]> {
    const query = plainToClass(RepairScheduleFindManyArgs, request.query);
    const results = await this.service.findRepairSchedules(params.id, {
      ...query,
      select: {
        id: true,
        time: true,

        admin: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        updatedAt: true,
        deletedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/repairSchedules")
  @nestAccessControl.UseRoles({
    resource: "Admin",
    action: "update",
    possession: "any",
  })
  async connectRepairSchedules(
    @common.Param() params: AdminWhereUniqueInput,
    @common.Body() body: RepairScheduleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      repairSchedules: {
        connect: body,
      },
    };
    await this.service.updateAdmin({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/repairSchedules")
  @nestAccessControl.UseRoles({
    resource: "Admin",
    action: "update",
    possession: "any",
  })
  async updateRepairSchedules(
    @common.Param() params: AdminWhereUniqueInput,
    @common.Body() body: RepairScheduleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      repairSchedules: {
        set: body,
      },
    };
    await this.service.updateAdmin({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/repairSchedules")
  @nestAccessControl.UseRoles({
    resource: "Admin",
    action: "update",
    possession: "any",
  })
  async disconnectRepairSchedules(
    @common.Param() params: AdminWhereUniqueInput,
    @common.Body() body: RepairScheduleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      repairSchedules: {
        disconnect: body,
      },
    };
    await this.service.updateAdmin({
      where: params,
      data,
      select: { id: true },
    });
  }
}
