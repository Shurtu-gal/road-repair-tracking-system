
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { RepairScheduleService } from "../repairSchedule.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { RepairScheduleCreateInput } from "./RepairScheduleCreateInput";
import { RepairSchedule } from "./RepairSchedule";
import { RepairScheduleFindManyArgs } from "./RepairScheduleFindManyArgs";
import { RepairScheduleWhereUniqueInput } from "./RepairScheduleWhereUniqueInput";
import { RepairScheduleUpdateInput } from "./RepairScheduleUpdateInput";
import { SupervisorFindManyArgs } from "../../supervisor/base/SupervisorFindManyArgs";
import { Supervisor } from "../../supervisor/base/Supervisor";
import { SupervisorWhereUniqueInput } from "../../supervisor/base/SupervisorWhereUniqueInput";
import { RepairFindManyArgs } from "../../repair/base/RepairFindManyArgs";
import { Repair } from "../../repair/base/Repair";
import { RepairWhereUniqueInput } from "../../repair/base/RepairWhereUniqueInput";
import { ReportFindManyArgs } from "../../report/base/ReportFindManyArgs";
import { Report } from "../../report/base/Report";
import { ReportWhereUniqueInput } from "../../report/base/ReportWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class RepairScheduleControllerBase {
  constructor(
    protected readonly service: RepairScheduleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: RepairSchedule })
  @nestAccessControl.UseRoles({
    resource: "RepairSchedule",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createRepairSchedule(
    @common.Body() data: RepairScheduleCreateInput
  ): Promise<RepairSchedule> {
    return await this.service.createRepairSchedule({
      data: {
        ...data,

        admin: data.admin
          ? {
              connect: data.admin,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [RepairSchedule] })
  @ApiNestedQuery(RepairScheduleFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "RepairSchedule",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async repairSchedules(
    @common.Req() request: Request
  ): Promise<RepairSchedule[]> {
    const args = plainToClass(RepairScheduleFindManyArgs, request.query);
    return this.service.repairSchedules({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: RepairSchedule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "RepairSchedule",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async repairSchedule(
    @common.Param() params: RepairScheduleWhereUniqueInput
  ): Promise<RepairSchedule | null> {
    const result = await this.service.repairSchedule({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: RepairSchedule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "RepairSchedule",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateRepairSchedule(
    @common.Param() params: RepairScheduleWhereUniqueInput,
    @common.Body() data: RepairScheduleUpdateInput
  ): Promise<RepairSchedule | null> {
    try {
      return await this.service.updateRepairSchedule({
        where: params,
        data: {
          ...data,

          admin: data.admin
            ? {
                connect: data.admin,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: RepairSchedule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "RepairSchedule",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteRepairSchedule(
    @common.Param() params: RepairScheduleWhereUniqueInput
  ): Promise<RepairSchedule | null> {
    try {
      return await this.service.deleteRepairSchedule({
        where: params,
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
    @common.Param() params: RepairScheduleWhereUniqueInput
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
    resource: "RepairSchedule",
    action: "update",
    possession: "any",
  })
  async connectSupervisors(
    @common.Param() params: RepairScheduleWhereUniqueInput,
    @common.Body() body: SupervisorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      supervisors: {
        connect: body,
      },
    };
    await this.service.updateRepairSchedule({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/supervisors")
  @nestAccessControl.UseRoles({
    resource: "RepairSchedule",
    action: "update",
    possession: "any",
  })
  async updateSupervisors(
    @common.Param() params: RepairScheduleWhereUniqueInput,
    @common.Body() body: SupervisorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      supervisors: {
        set: body,
      },
    };
    await this.service.updateRepairSchedule({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/supervisors")
  @nestAccessControl.UseRoles({
    resource: "RepairSchedule",
    action: "update",
    possession: "any",
  })
  async disconnectSupervisors(
    @common.Param() params: RepairScheduleWhereUniqueInput,
    @common.Body() body: SupervisorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      supervisors: {
        disconnect: body,
      },
    };
    await this.service.updateRepairSchedule({
      where: params,
      data,
      select: { id: true },
    });
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
    @common.Param() params: RepairScheduleWhereUniqueInput
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
    resource: "RepairSchedule",
    action: "update",
    possession: "any",
  })
  async connectRepairs(
    @common.Param() params: RepairScheduleWhereUniqueInput,
    @common.Body() body: RepairWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      repairs: {
        connect: body,
      },
    };
    await this.service.updateRepairSchedule({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/repairs")
  @nestAccessControl.UseRoles({
    resource: "RepairSchedule",
    action: "update",
    possession: "any",
  })
  async updateRepairs(
    @common.Param() params: RepairScheduleWhereUniqueInput,
    @common.Body() body: RepairWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      repairs: {
        set: body,
      },
    };
    await this.service.updateRepairSchedule({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/repairs")
  @nestAccessControl.UseRoles({
    resource: "RepairSchedule",
    action: "update",
    possession: "any",
  })
  async disconnectRepairs(
    @common.Param() params: RepairScheduleWhereUniqueInput,
    @common.Body() body: RepairWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      repairs: {
        disconnect: body,
      },
    };
    await this.service.updateRepairSchedule({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/report")
  @ApiNestedQuery(ReportFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "read",
    possession: "any",
  })
  async findReport(
    @common.Req() request: Request,
    @common.Param() params: RepairScheduleWhereUniqueInput
  ): Promise<Report[]> {
    const query = plainToClass(ReportFindManyArgs, request.query);
    const results = await this.service.findReport(params.id, {
      ...query,
      select: {
        id: true,
        time: true,

        repairSchedule: {
          select: {
            id: true,
          },
        },

        mayor: {
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

  @common.Post("/:id/report")
  @nestAccessControl.UseRoles({
    resource: "RepairSchedule",
    action: "update",
    possession: "any",
  })
  async connectReport(
    @common.Param() params: RepairScheduleWhereUniqueInput,
    @common.Body() body: ReportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      report: {
        connect: body,
      },
    };
    await this.service.updateRepairSchedule({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/report")
  @nestAccessControl.UseRoles({
    resource: "RepairSchedule",
    action: "update",
    possession: "any",
  })
  async updateReport(
    @common.Param() params: RepairScheduleWhereUniqueInput,
    @common.Body() body: ReportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      report: {
        set: body,
      },
    };
    await this.service.updateRepairSchedule({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/report")
  @nestAccessControl.UseRoles({
    resource: "RepairSchedule",
    action: "update",
    possession: "any",
  })
  async disconnectReport(
    @common.Param() params: RepairScheduleWhereUniqueInput,
    @common.Body() body: ReportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      report: {
        disconnect: body,
      },
    };
    await this.service.updateRepairSchedule({
      where: params,
      data,
      select: { id: true },
    });
  }
}
