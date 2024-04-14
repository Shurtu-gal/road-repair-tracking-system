
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { RepairService } from "../repair.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { RepairCreateInput } from "./RepairCreateInput";
import { Repair } from "./Repair";
import { RepairFindManyArgs } from "./RepairFindManyArgs";
import { RepairWhereUniqueInput } from "./RepairWhereUniqueInput";
import { RepairUpdateInput } from "./RepairUpdateInput";
import { ComplaintFindManyArgs } from "../../complaint/base/ComplaintFindManyArgs";
import { Complaint } from "../../complaint/base/Complaint";
import { ComplaintWhereUniqueInput } from "../../complaint/base/ComplaintWhereUniqueInput";
import { ResourceFindManyArgs } from "../../resource/base/ResourceFindManyArgs";
import { Resource } from "../../resource/base/Resource";
import { ResourceWhereUniqueInput } from "../../resource/base/ResourceWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class RepairControllerBase {
  constructor(
    protected readonly service: RepairService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Repair })
  @nestAccessControl.UseRoles({
    resource: "Repair",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createRepair(@common.Body() data: RepairCreateInput): Promise<Repair> {
    return await this.service.createRepair({
      data: {
        ...data,

        assignedTo: {
          connect: data.assignedTo,
        },

        area: {
          connect: data.area,
        },

        supervisors: data.supervisors
          ? {
              connect: data.supervisors,
            }
          : undefined,

        repairSchedule: data.repairSchedule
          ? {
              connect: data.repairSchedule,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Repair] })
  @ApiNestedQuery(RepairFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Repair",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async repairs(@common.Req() request: Request): Promise<Repair[]> {
    const args = plainToClass(RepairFindManyArgs, request.query);
    return this.service.repairs({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Repair })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Repair",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async repair(
    @common.Param() params: RepairWhereUniqueInput
  ): Promise<Repair | null> {
    const result = await this.service.repair({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Repair })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Repair",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateRepair(
    @common.Param() params: RepairWhereUniqueInput,
    @common.Body() data: RepairUpdateInput
  ): Promise<Repair | null> {
    try {
      return await this.service.updateRepair({
        where: params,
        data: {
          ...data,

          assignedTo: {
            connect: data.assignedTo,
          },

          area: {
            connect: data.area,
          },

          supervisors: data.supervisors
            ? {
                connect: data.supervisors,
              }
            : undefined,

          repairSchedule: data.repairSchedule
            ? {
                connect: data.repairSchedule,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Repair })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Repair",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteRepair(
    @common.Param() params: RepairWhereUniqueInput
  ): Promise<Repair | null> {
    try {
      return await this.service.deleteRepair({
        where: params,
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
  @common.Get("/:id/complaints")
  @ApiNestedQuery(ComplaintFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Complaint",
    action: "read",
    possession: "any",
  })
  async findComplaints(
    @common.Req() request: Request,
    @common.Param() params: RepairWhereUniqueInput
  ): Promise<Complaint[]> {
    const query = plainToClass(ComplaintFindManyArgs, request.query);
    const results = await this.service.findComplaints(params.id, {
      ...query,
      select: {
        id: true,
        road: true,
        description: true,
        subscription: true,

        area: {
          select: {
            id: true,
          },
        },

        user: {
          select: {
            id: true,
          },
        },

        severity: true,
        status: true,

        residents: {
          select: {
            id: true,
          },
        },

        repair: {
          select: {
            id: true,
          },
        },

        report: {
          select: {
            id: true,
          },
        },

        update: {
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

  @common.Post("/:id/complaints")
  @nestAccessControl.UseRoles({
    resource: "Repair",
    action: "update",
    possession: "any",
  })
  async connectComplaints(
    @common.Param() params: RepairWhereUniqueInput,
    @common.Body() body: ComplaintWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      complaints: {
        connect: body,
      },
    };
    await this.service.updateRepair({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/complaints")
  @nestAccessControl.UseRoles({
    resource: "Repair",
    action: "update",
    possession: "any",
  })
  async updateComplaints(
    @common.Param() params: RepairWhereUniqueInput,
    @common.Body() body: ComplaintWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      complaints: {
        set: body,
      },
    };
    await this.service.updateRepair({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/complaints")
  @nestAccessControl.UseRoles({
    resource: "Repair",
    action: "update",
    possession: "any",
  })
  async disconnectComplaints(
    @common.Param() params: RepairWhereUniqueInput,
    @common.Body() body: ComplaintWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      complaints: {
        disconnect: body,
      },
    };
    await this.service.updateRepair({
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
    @common.Param() params: RepairWhereUniqueInput
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
    resource: "Repair",
    action: "update",
    possession: "any",
  })
  async connectResources(
    @common.Param() params: RepairWhereUniqueInput,
    @common.Body() body: ResourceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      resources: {
        connect: body,
      },
    };
    await this.service.updateRepair({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/resources")
  @nestAccessControl.UseRoles({
    resource: "Repair",
    action: "update",
    possession: "any",
  })
  async updateResources(
    @common.Param() params: RepairWhereUniqueInput,
    @common.Body() body: ResourceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      resources: {
        set: body,
      },
    };
    await this.service.updateRepair({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/resources")
  @nestAccessControl.UseRoles({
    resource: "Repair",
    action: "update",
    possession: "any",
  })
  async disconnectResources(
    @common.Param() params: RepairWhereUniqueInput,
    @common.Body() body: ResourceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      resources: {
        disconnect: body,
      },
    };
    await this.service.updateRepair({
      where: params,
      data,
      select: { id: true },
    });
  }
}
