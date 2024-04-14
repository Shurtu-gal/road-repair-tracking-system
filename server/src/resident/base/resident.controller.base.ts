
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ResidentService } from "../resident.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ResidentCreateInput } from "./ResidentCreateInput";
import { Resident } from "./Resident";
import { ResidentFindManyArgs } from "./ResidentFindManyArgs";
import { ResidentWhereUniqueInput } from "./ResidentWhereUniqueInput";
import { ResidentUpdateInput } from "./ResidentUpdateInput";
import { ComplaintFindManyArgs } from "../../complaint/base/ComplaintFindManyArgs";
import { Complaint } from "../../complaint/base/Complaint";
import { ComplaintWhereUniqueInput } from "../../complaint/base/ComplaintWhereUniqueInput";
import { UpdateFindManyArgs } from "../../update/base/UpdateFindManyArgs";
import { Update } from "../../update/base/Update";
import { UpdateWhereUniqueInput } from "../../update/base/UpdateWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ResidentControllerBase {
  constructor(
    protected readonly service: ResidentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Resident })
  @nestAccessControl.UseRoles({
    resource: "Resident",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createResident(
    @common.Body() data: ResidentCreateInput
  ): Promise<Resident> {
    return await this.service.createResident({
      data: {
        ...data,

        area: {
          connect: data.area,
        },

        user: {
          connect: data.user,
        },
      },
      select: {
        id: true,

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

        createdAt: true,
        updatedAt: true,
        deletedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Resident] })
  @ApiNestedQuery(ResidentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Resident",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async residents(@common.Req() request: Request): Promise<Resident[]> {
    const args = plainToClass(ResidentFindManyArgs, request.query);
    return this.service.residents({
      ...args,
      select: {
        id: true,

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

        createdAt: true,
        updatedAt: true,
        deletedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Resident })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Resident",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async resident(
    @common.Param() params: ResidentWhereUniqueInput
  ): Promise<Resident | null> {
    const result = await this.service.resident({
      where: params,
      select: {
        id: true,

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
  @swagger.ApiOkResponse({ type: Resident })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Resident",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateResident(
    @common.Param() params: ResidentWhereUniqueInput,
    @common.Body() data: ResidentUpdateInput
  ): Promise<Resident | null> {
    try {
      return await this.service.updateResident({
        where: params,
        data: {
          ...data,

          area: {
            connect: data.area,
          },

          user: {
            connect: data.user,
          },
        },
        select: {
          id: true,

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
  @swagger.ApiOkResponse({ type: Resident })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Resident",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteResident(
    @common.Param() params: ResidentWhereUniqueInput
  ): Promise<Resident | null> {
    try {
      return await this.service.deleteResident({
        where: params,
        select: {
          id: true,

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
    @common.Param() params: ResidentWhereUniqueInput
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
    resource: "Resident",
    action: "update",
    possession: "any",
  })
  async connectComplaints(
    @common.Param() params: ResidentWhereUniqueInput,
    @common.Body() body: ComplaintWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      complaints: {
        connect: body,
      },
    };
    await this.service.updateResident({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/complaints")
  @nestAccessControl.UseRoles({
    resource: "Resident",
    action: "update",
    possession: "any",
  })
  async updateComplaints(
    @common.Param() params: ResidentWhereUniqueInput,
    @common.Body() body: ComplaintWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      complaints: {
        set: body,
      },
    };
    await this.service.updateResident({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/complaints")
  @nestAccessControl.UseRoles({
    resource: "Resident",
    action: "update",
    possession: "any",
  })
  async disconnectComplaints(
    @common.Param() params: ResidentWhereUniqueInput,
    @common.Body() body: ComplaintWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      complaints: {
        disconnect: body,
      },
    };
    await this.service.updateResident({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/updates")
  @ApiNestedQuery(UpdateFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Update",
    action: "read",
    possession: "any",
  })
  async findUpdates(
    @common.Req() request: Request,
    @common.Param() params: ResidentWhereUniqueInput
  ): Promise<Update[]> {
    const query = plainToClass(UpdateFindManyArgs, request.query);
    const results = await this.service.findUpdates(params.id, {
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

  @common.Post("/:id/updates")
  @nestAccessControl.UseRoles({
    resource: "Resident",
    action: "update",
    possession: "any",
  })
  async connectUpdates(
    @common.Param() params: ResidentWhereUniqueInput,
    @common.Body() body: UpdateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      updates: {
        connect: body,
      },
    };
    await this.service.updateResident({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/updates")
  @nestAccessControl.UseRoles({
    resource: "Resident",
    action: "update",
    possession: "any",
  })
  async updateUpdates(
    @common.Param() params: ResidentWhereUniqueInput,
    @common.Body() body: UpdateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      updates: {
        set: body,
      },
    };
    await this.service.updateResident({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/updates")
  @nestAccessControl.UseRoles({
    resource: "Resident",
    action: "update",
    possession: "any",
  })
  async disconnectUpdates(
    @common.Param() params: ResidentWhereUniqueInput,
    @common.Body() body: UpdateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      updates: {
        disconnect: body,
      },
    };
    await this.service.updateResident({
      where: params,
      data,
      select: { id: true },
    });
  }
}
