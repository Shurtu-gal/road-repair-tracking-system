
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { SupervisorService } from "../supervisor.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SupervisorCreateInput } from "./SupervisorCreateInput";
import { Supervisor } from "./Supervisor";
import { SupervisorFindManyArgs } from "./SupervisorFindManyArgs";
import { SupervisorWhereUniqueInput } from "./SupervisorWhereUniqueInput";
import { SupervisorUpdateInput } from "./SupervisorUpdateInput";
import { RepairFindManyArgs } from "../../repair/base/RepairFindManyArgs";
import { Repair } from "../../repair/base/Repair";
import { RepairWhereUniqueInput } from "../../repair/base/RepairWhereUniqueInput";
import { ResourceFindManyArgs } from "../../resource/base/ResourceFindManyArgs";
import { Resource } from "../../resource/base/Resource";
import { ResourceWhereUniqueInput } from "../../resource/base/ResourceWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SupervisorControllerBase {
  constructor(
    protected readonly service: SupervisorService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Supervisor })
  @nestAccessControl.UseRoles({
    resource: "Supervisor",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSupervisor(
    @common.Body() data: SupervisorCreateInput
  ): Promise<Supervisor> {
    return await this.service.createSupervisor({
      data: {
        ...data,

        area: {
          connect: data.area,
        },

        repairSchedule: data.repairSchedule
          ? {
              connect: data.repairSchedule,
            }
          : undefined,

        user: {
          connect: data.user,
        },

        admin: data.admin
          ? {
              connect: data.admin,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Supervisor] })
  @ApiNestedQuery(SupervisorFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Supervisor",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async supervisors(@common.Req() request: Request): Promise<Supervisor[]> {
    const args = plainToClass(SupervisorFindManyArgs, request.query);
    return this.service.supervisors({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Supervisor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Supervisor",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async supervisor(
    @common.Param() params: SupervisorWhereUniqueInput
  ): Promise<Supervisor | null> {
    const result = await this.service.supervisor({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Supervisor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Supervisor",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSupervisor(
    @common.Param() params: SupervisorWhereUniqueInput,
    @common.Body() data: SupervisorUpdateInput
  ): Promise<Supervisor | null> {
    try {
      return await this.service.updateSupervisor({
        where: params,
        data: {
          ...data,

          area: {
            connect: data.area,
          },

          repairSchedule: data.repairSchedule
            ? {
                connect: data.repairSchedule,
              }
            : undefined,

          user: {
            connect: data.user,
          },

          admin: data.admin
            ? {
                connect: data.admin,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Supervisor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Supervisor",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSupervisor(
    @common.Param() params: SupervisorWhereUniqueInput
  ): Promise<Supervisor | null> {
    try {
      return await this.service.deleteSupervisor({
        where: params,
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
  @common.Get("/:id/repairs")
  @ApiNestedQuery(RepairFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Repair",
    action: "read",
    possession: "any",
  })
  async findRepairs(
    @common.Req() request: Request,
    @common.Param() params: SupervisorWhereUniqueInput
  ): Promise<Repair[]> {
    const query = plainToClass(RepairFindManyArgs, request.query);
    const results = await this.service.findRepairs(params.id, {
      ...query,
      select: {
        id: true,
        status: true,
        priority: true,

        assignedTo: {
          select: {
            id: true,
          },
        },

        area: {
          select: {
            id: true,
          },
        },

        supervisors: {
          select: {
            id: true,
          },
        },

        repairSchedule: {
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

  @common.Post("/:id/repairs")
  @nestAccessControl.UseRoles({
    resource: "Supervisor",
    action: "update",
    possession: "any",
  })
  async connectRepairs(
    @common.Param() params: SupervisorWhereUniqueInput,
    @common.Body() body: RepairWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      repairs: {
        connect: body,
      },
    };
    await this.service.updateSupervisor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/repairs")
  @nestAccessControl.UseRoles({
    resource: "Supervisor",
    action: "update",
    possession: "any",
  })
  async updateRepairs(
    @common.Param() params: SupervisorWhereUniqueInput,
    @common.Body() body: RepairWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      repairs: {
        set: body,
      },
    };
    await this.service.updateSupervisor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/repairs")
  @nestAccessControl.UseRoles({
    resource: "Supervisor",
    action: "update",
    possession: "any",
  })
  async disconnectRepairs(
    @common.Param() params: SupervisorWhereUniqueInput,
    @common.Body() body: RepairWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      repairs: {
        disconnect: body,
      },
    };
    await this.service.updateSupervisor({
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
    @common.Param() params: SupervisorWhereUniqueInput
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
    resource: "Supervisor",
    action: "update",
    possession: "any",
  })
  async connectResources(
    @common.Param() params: SupervisorWhereUniqueInput,
    @common.Body() body: ResourceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      resources: {
        connect: body,
      },
    };
    await this.service.updateSupervisor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/resources")
  @nestAccessControl.UseRoles({
    resource: "Supervisor",
    action: "update",
    possession: "any",
  })
  async updateResources(
    @common.Param() params: SupervisorWhereUniqueInput,
    @common.Body() body: ResourceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      resources: {
        set: body,
      },
    };
    await this.service.updateSupervisor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/resources")
  @nestAccessControl.UseRoles({
    resource: "Supervisor",
    action: "update",
    possession: "any",
  })
  async disconnectResources(
    @common.Param() params: SupervisorWhereUniqueInput,
    @common.Body() body: ResourceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      resources: {
        disconnect: body,
      },
    };
    await this.service.updateSupervisor({
      where: params,
      data,
      select: { id: true },
    });
  }
}
