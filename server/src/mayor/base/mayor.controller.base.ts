
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { MayorService } from "../mayor.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MayorCreateInput } from "./MayorCreateInput";
import { Mayor } from "./Mayor";
import { MayorFindManyArgs } from "./MayorFindManyArgs";
import { MayorWhereUniqueInput } from "./MayorWhereUniqueInput";
import { MayorUpdateInput } from "./MayorUpdateInput";
import { AdminFindManyArgs } from "../../admin/base/AdminFindManyArgs";
import { Admin } from "../../admin/base/Admin";
import { AdminWhereUniqueInput } from "../../admin/base/AdminWhereUniqueInput";
import { ReportFindManyArgs } from "../../report/base/ReportFindManyArgs";
import { Report } from "../../report/base/Report";
import { ReportWhereUniqueInput } from "../../report/base/ReportWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MayorControllerBase {
  constructor(
    protected readonly service: MayorService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Mayor })
  @nestAccessControl.UseRoles({
    resource: "Mayor",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createMayor(@common.Body() data: MayorCreateInput): Promise<Mayor> {
    return await this.service.createMayor({
      data: {
        ...data,

        user: {
          connect: data.user,
        },
      },
      select: {
        id: true,
        city: true,

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
  @swagger.ApiOkResponse({ type: [Mayor] })
  @ApiNestedQuery(MayorFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Mayor",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async mayors(@common.Req() request: Request): Promise<Mayor[]> {
    const args = plainToClass(MayorFindManyArgs, request.query);
    return this.service.mayors({
      ...args,
      select: {
        id: true,
        city: true,

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
  @swagger.ApiOkResponse({ type: Mayor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Mayor",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async mayor(
    @common.Param() params: MayorWhereUniqueInput
  ): Promise<Mayor | null> {
    const result = await this.service.mayor({
      where: params,
      select: {
        id: true,
        city: true,

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
  @swagger.ApiOkResponse({ type: Mayor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Mayor",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateMayor(
    @common.Param() params: MayorWhereUniqueInput,
    @common.Body() data: MayorUpdateInput
  ): Promise<Mayor | null> {
    try {
      return await this.service.updateMayor({
        where: params,
        data: {
          ...data,

          user: {
            connect: data.user,
          },
        },
        select: {
          id: true,
          city: true,

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
  @swagger.ApiOkResponse({ type: Mayor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Mayor",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMayor(
    @common.Param() params: MayorWhereUniqueInput
  ): Promise<Mayor | null> {
    try {
      return await this.service.deleteMayor({
        where: params,
        select: {
          id: true,
          city: true,

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
  @common.Get("/:id/admin")
  @ApiNestedQuery(AdminFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Admin",
    action: "read",
    possession: "any",
  })
  async findAdmin(
    @common.Req() request: Request,
    @common.Param() params: MayorWhereUniqueInput
  ): Promise<Admin[]> {
    const query = plainToClass(AdminFindManyArgs, request.query);
    const results = await this.service.findAdmin(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/admin")
  @nestAccessControl.UseRoles({
    resource: "Mayor",
    action: "update",
    possession: "any",
  })
  async connectAdmin(
    @common.Param() params: MayorWhereUniqueInput,
    @common.Body() body: AdminWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      admin: {
        connect: body,
      },
    };
    await this.service.updateMayor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/admin")
  @nestAccessControl.UseRoles({
    resource: "Mayor",
    action: "update",
    possession: "any",
  })
  async updateAdmin(
    @common.Param() params: MayorWhereUniqueInput,
    @common.Body() body: AdminWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      admin: {
        set: body,
      },
    };
    await this.service.updateMayor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/admin")
  @nestAccessControl.UseRoles({
    resource: "Mayor",
    action: "update",
    possession: "any",
  })
  async disconnectAdmin(
    @common.Param() params: MayorWhereUniqueInput,
    @common.Body() body: AdminWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      admin: {
        disconnect: body,
      },
    };
    await this.service.updateMayor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/reports")
  @ApiNestedQuery(ReportFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "read",
    possession: "any",
  })
  async findReports(
    @common.Req() request: Request,
    @common.Param() params: MayorWhereUniqueInput
  ): Promise<Report[]> {
    const query = plainToClass(ReportFindManyArgs, request.query);
    const results = await this.service.findReports(params.id, {
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

  @common.Post("/:id/reports")
  @nestAccessControl.UseRoles({
    resource: "Mayor",
    action: "update",
    possession: "any",
  })
  async connectReports(
    @common.Param() params: MayorWhereUniqueInput,
    @common.Body() body: ReportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reports: {
        connect: body,
      },
    };
    await this.service.updateMayor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/reports")
  @nestAccessControl.UseRoles({
    resource: "Mayor",
    action: "update",
    possession: "any",
  })
  async updateReports(
    @common.Param() params: MayorWhereUniqueInput,
    @common.Body() body: ReportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reports: {
        set: body,
      },
    };
    await this.service.updateMayor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/reports")
  @nestAccessControl.UseRoles({
    resource: "Mayor",
    action: "update",
    possession: "any",
  })
  async disconnectReports(
    @common.Param() params: MayorWhereUniqueInput,
    @common.Body() body: ReportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reports: {
        disconnect: body,
      },
    };
    await this.service.updateMayor({
      where: params,
      data,
      select: { id: true },
    });
  }
}
