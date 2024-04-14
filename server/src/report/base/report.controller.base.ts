
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ReportService } from "../report.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ReportCreateInput } from "./ReportCreateInput";
import { Report } from "./Report";
import { ReportFindManyArgs } from "./ReportFindManyArgs";
import { ReportWhereUniqueInput } from "./ReportWhereUniqueInput";
import { ReportUpdateInput } from "./ReportUpdateInput";
import { ComplaintFindManyArgs } from "../../complaint/base/ComplaintFindManyArgs";
import { Complaint } from "../../complaint/base/Complaint";
import { ComplaintWhereUniqueInput } from "../../complaint/base/ComplaintWhereUniqueInput";
import { ResourceFindManyArgs } from "../../resource/base/ResourceFindManyArgs";
import { Resource } from "../../resource/base/Resource";
import { ResourceWhereUniqueInput } from "../../resource/base/ResourceWhereUniqueInput";
import { UpdateFindManyArgs } from "../../update/base/UpdateFindManyArgs";
import { Update } from "../../update/base/Update";
import { UpdateWhereUniqueInput } from "../../update/base/UpdateWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ReportControllerBase {
  constructor(
    protected readonly service: ReportService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Report })
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createReport(@common.Body() data: ReportCreateInput): Promise<Report> {
    return await this.service.createReport({
      data: {
        ...data,

        repairSchedule: {
          connect: data.repairSchedule,
        },

        mayor: data.mayor
          ? {
              connect: data.mayor,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Report] })
  @ApiNestedQuery(ReportFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async reports(@common.Req() request: Request): Promise<Report[]> {
    const args = plainToClass(ReportFindManyArgs, request.query);
    return this.service.reports({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Report })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async report(
    @common.Param() params: ReportWhereUniqueInput
  ): Promise<Report | null> {
    const result = await this.service.report({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Report })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateReport(
    @common.Param() params: ReportWhereUniqueInput,
    @common.Body() data: ReportUpdateInput
  ): Promise<Report | null> {
    try {
      return await this.service.updateReport({
        where: params,
        data: {
          ...data,

          repairSchedule: {
            connect: data.repairSchedule,
          },

          mayor: data.mayor
            ? {
                connect: data.mayor,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Report })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteReport(
    @common.Param() params: ReportWhereUniqueInput
  ): Promise<Report | null> {
    try {
      return await this.service.deleteReport({
        where: params,
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
    @common.Param() params: ReportWhereUniqueInput
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
    resource: "Report",
    action: "update",
    possession: "any",
  })
  async connectComplaints(
    @common.Param() params: ReportWhereUniqueInput,
    @common.Body() body: ComplaintWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      complaints: {
        connect: body,
      },
    };
    await this.service.updateReport({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/complaints")
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "update",
    possession: "any",
  })
  async updateComplaints(
    @common.Param() params: ReportWhereUniqueInput,
    @common.Body() body: ComplaintWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      complaints: {
        set: body,
      },
    };
    await this.service.updateReport({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/complaints")
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "update",
    possession: "any",
  })
  async disconnectComplaints(
    @common.Param() params: ReportWhereUniqueInput,
    @common.Body() body: ComplaintWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      complaints: {
        disconnect: body,
      },
    };
    await this.service.updateReport({
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
    @common.Param() params: ReportWhereUniqueInput
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
    resource: "Report",
    action: "update",
    possession: "any",
  })
  async connectResources(
    @common.Param() params: ReportWhereUniqueInput,
    @common.Body() body: ResourceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      resources: {
        connect: body,
      },
    };
    await this.service.updateReport({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/resources")
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "update",
    possession: "any",
  })
  async updateResources(
    @common.Param() params: ReportWhereUniqueInput,
    @common.Body() body: ResourceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      resources: {
        set: body,
      },
    };
    await this.service.updateReport({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/resources")
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "update",
    possession: "any",
  })
  async disconnectResources(
    @common.Param() params: ReportWhereUniqueInput,
    @common.Body() body: ResourceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      resources: {
        disconnect: body,
      },
    };
    await this.service.updateReport({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/update")
  @ApiNestedQuery(UpdateFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Update",
    action: "read",
    possession: "any",
  })
  async findUpdate(
    @common.Req() request: Request,
    @common.Param() params: ReportWhereUniqueInput
  ): Promise<Update[]> {
    const query = plainToClass(UpdateFindManyArgs, request.query);
    const results = await this.service.findUpdate(params.id, {
      ...query,
      select: {
        id: true,
        time: true,

        report: {
          select: {
            id: true,
          },
        },

        residents: {
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

  @common.Post("/:id/update")
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "update",
    possession: "any",
  })
  async connectUpdate(
    @common.Param() params: ReportWhereUniqueInput,
    @common.Body() body: UpdateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      update: {
        connect: body,
      },
    };
    await this.service.updateReport({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/update")
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "update",
    possession: "any",
  })
  async updateUpdate(
    @common.Param() params: ReportWhereUniqueInput,
    @common.Body() body: UpdateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      update: {
        set: body,
      },
    };
    await this.service.updateReport({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/update")
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "update",
    possession: "any",
  })
  async disconnectUpdate(
    @common.Param() params: ReportWhereUniqueInput,
    @common.Body() body: UpdateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      update: {
        disconnect: body,
      },
    };
    await this.service.updateReport({
      where: params,
      data,
      select: { id: true },
    });
  }
}
