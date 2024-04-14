
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ComplaintService } from "../complaint.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ComplaintCreateInput } from "./ComplaintCreateInput";
import { Complaint } from "./Complaint";
import { ComplaintFindManyArgs } from "./ComplaintFindManyArgs";
import { ComplaintWhereUniqueInput } from "./ComplaintWhereUniqueInput";
import { ComplaintUpdateInput } from "./ComplaintUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ComplaintControllerBase {
  constructor(
    protected readonly service: ComplaintService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Complaint })
  @nestAccessControl.UseRoles({
    resource: "Complaint",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createComplaint(
    @common.Body() data: ComplaintCreateInput
  ): Promise<Complaint> {
    return await this.service.createComplaint({
      data: {
        ...data,

        area: {
          connect: data.area,
        },

        user: {
          connect: data.user,
        },

        residents: data.residents
          ? {
              connect: data.residents,
            }
          : undefined,

        repair: data.repair
          ? {
              connect: data.repair,
            }
          : undefined,

        report: data.report
          ? {
              connect: data.report,
            }
          : undefined,

        update: data.update
          ? {
              connect: data.update,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Complaint] })
  @ApiNestedQuery(ComplaintFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Complaint",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async complaints(@common.Req() request: Request): Promise<Complaint[]> {
    const args = plainToClass(ComplaintFindManyArgs, request.query);
    return this.service.complaints({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Complaint })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Complaint",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async complaint(
    @common.Param() params: ComplaintWhereUniqueInput
  ): Promise<Complaint | null> {
    const result = await this.service.complaint({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Complaint })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Complaint",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateComplaint(
    @common.Param() params: ComplaintWhereUniqueInput,
    @common.Body() data: ComplaintUpdateInput
  ): Promise<Complaint | null> {
    try {
      return await this.service.updateComplaint({
        where: params,
        data: {
          ...data,

          area: {
            connect: data.area,
          },

          user: {
            connect: data.user,
          },

          residents: data.residents
            ? {
                connect: data.residents,
              }
            : undefined,

          repair: data.repair
            ? {
                connect: data.repair,
              }
            : undefined,

          report: data.report
            ? {
                connect: data.report,
              }
            : undefined,

          update: data.update
            ? {
                connect: data.update,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Complaint })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Complaint",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteComplaint(
    @common.Param() params: ComplaintWhereUniqueInput
  ): Promise<Complaint | null> {
    try {
      return await this.service.deleteComplaint({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
