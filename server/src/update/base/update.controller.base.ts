
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { UpdateService } from "../update.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UpdateCreateInput } from "./UpdateCreateInput";
import { Update } from "./Update";
import { UpdateFindManyArgs } from "./UpdateFindManyArgs";
import { UpdateWhereUniqueInput } from "./UpdateWhereUniqueInput";
import { UpdateUpdateInput } from "./UpdateUpdateInput";
import { ComplaintFindManyArgs } from "../../complaint/base/ComplaintFindManyArgs";
import { Complaint } from "../../complaint/base/Complaint";
import { ComplaintWhereUniqueInput } from "../../complaint/base/ComplaintWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UpdateControllerBase {
  constructor(
    protected readonly service: UpdateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Update })
  @nestAccessControl.UseRoles({
    resource: "Update",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createUpdate(@common.Body() data: UpdateCreateInput): Promise<Update> {
    return await this.service.createUpdate({
      data: {
        ...data,

        report: {
          connect: data.report,
        },

        residents: data.residents
          ? {
              connect: data.residents,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Update] })
  @ApiNestedQuery(UpdateFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Update",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updates(@common.Req() request: Request): Promise<Update[]> {
    const args = plainToClass(UpdateFindManyArgs, request.query);
    return this.service.updates({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Update })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Update",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: UpdateWhereUniqueInput
  ): Promise<Update | null> {
    const result = await this.service.update({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Update })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Update",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateUpdate(
    @common.Param() params: UpdateWhereUniqueInput,
    @common.Body() data: UpdateUpdateInput
  ): Promise<Update | null> {
    try {
      return await this.service.updateUpdate({
        where: params,
        data: {
          ...data,

          report: {
            connect: data.report,
          },

          residents: data.residents
            ? {
                connect: data.residents,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Update })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Update",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUpdate(
    @common.Param() params: UpdateWhereUniqueInput
  ): Promise<Update | null> {
    try {
      return await this.service.deleteUpdate({
        where: params,
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
    @common.Param() params: UpdateWhereUniqueInput
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
    resource: "Update",
    action: "update",
    possession: "any",
  })
  async connectComplaints(
    @common.Param() params: UpdateWhereUniqueInput,
    @common.Body() body: ComplaintWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      complaints: {
        connect: body,
      },
    };
    await this.service.updateUpdate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/complaints")
  @nestAccessControl.UseRoles({
    resource: "Update",
    action: "update",
    possession: "any",
  })
  async updateComplaints(
    @common.Param() params: UpdateWhereUniqueInput,
    @common.Body() body: ComplaintWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      complaints: {
        set: body,
      },
    };
    await this.service.updateUpdate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/complaints")
  @nestAccessControl.UseRoles({
    resource: "Update",
    action: "update",
    possession: "any",
  })
  async disconnectComplaints(
    @common.Param() params: UpdateWhereUniqueInput,
    @common.Body() body: ComplaintWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      complaints: {
        disconnect: body,
      },
    };
    await this.service.updateUpdate({
      where: params,
      data,
      select: { id: true },
    });
  }
}
