
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ResourceService } from "../resource.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ResourceCreateInput } from "./ResourceCreateInput";
import { Resource } from "./Resource";
import { ResourceFindManyArgs } from "./ResourceFindManyArgs";
import { ResourceWhereUniqueInput } from "./ResourceWhereUniqueInput";
import { ResourceUpdateInput } from "./ResourceUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ResourceControllerBase {
  constructor(
    protected readonly service: ResourceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Resource })
  @nestAccessControl.UseRoles({
    resource: "Resource",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createResource(
    @common.Body() data: ResourceCreateInput
  ): Promise<Resource> {
    return await this.service.createResource({
      data: {
        ...data,

        allocation: {
          connect: data.allocation,
        },

        supervisors: data.supervisors
          ? {
              connect: data.supervisors,
            }
          : undefined,

        admin: data.admin
          ? {
              connect: data.admin,
            }
          : undefined,

        report: data.report
          ? {
              connect: data.report,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Resource] })
  @ApiNestedQuery(ResourceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Resource",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async resources(@common.Req() request: Request): Promise<Resource[]> {
    const args = plainToClass(ResourceFindManyArgs, request.query);
    return this.service.resources({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Resource })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Resource",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async resource(
    @common.Param() params: ResourceWhereUniqueInput
  ): Promise<Resource | null> {
    const result = await this.service.resource({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Resource })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Resource",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateResource(
    @common.Param() params: ResourceWhereUniqueInput,
    @common.Body() data: ResourceUpdateInput
  ): Promise<Resource | null> {
    try {
      return await this.service.updateResource({
        where: params,
        data: {
          ...data,

          allocation: {
            connect: data.allocation,
          },

          supervisors: data.supervisors
            ? {
                connect: data.supervisors,
              }
            : undefined,

          admin: data.admin
            ? {
                connect: data.admin,
              }
            : undefined,

          report: data.report
            ? {
                connect: data.report,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Resource })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Resource",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteResource(
    @common.Param() params: ResourceWhereUniqueInput
  ): Promise<Resource | null> {
    try {
      return await this.service.deleteResource({
        where: params,
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
