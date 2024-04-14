
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { UserService } from "../user.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserCreateInput } from "./UserCreateInput";
import { User } from "./User";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserUpdateInput } from "./UserUpdateInput";
import { ComplaintFindManyArgs } from "../../complaint/base/ComplaintFindManyArgs";
import { Complaint } from "../../complaint/base/Complaint";
import { ComplaintWhereUniqueInput } from "../../complaint/base/ComplaintWhereUniqueInput";
import { RepairFindManyArgs } from "../../repair/base/RepairFindManyArgs";
import { Repair } from "../../repair/base/Repair";
import { RepairWhereUniqueInput } from "../../repair/base/RepairWhereUniqueInput";
import { Prisma } from "@prisma/client";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserControllerBase {
  constructor(
    protected readonly service: UserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createUser(@common.Body() data: UserCreateInput): Promise<User> {
    return await this.service.createUser({
      data: {
        ...data,
        roles: data.roles || Prisma.DbNull,

        residents: data.residents
          ? {
              connect: data.residents,
            }
          : undefined,

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

        mayor: data.mayor
          ? {
              connect: data.mayor,
            }
          : undefined,
      },
      select: {
        id: true,
        name: true,
        username: true,
        age: true,
        phone: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,

        residents: {
          select: {
            id: true,
          },
        },

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

        mayor: {
          select: {
            id: true,
          },
        },

        roles: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async users(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.users({
      ...args,
      select: {
        id: true,
        name: true,
        username: true,
        age: true,
        phone: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,

        residents: {
          select: {
            id: true,
          },
        },

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

        mayor: {
          select: {
            id: true,
          },
        },

        roles: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async user(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.user({
      where: params,
      select: {
        id: true,
        name: true,
        username: true,
        age: true,
        phone: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,

        residents: {
          select: {
            id: true,
          },
        },

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

        mayor: {
          select: {
            id: true,
          },
        },

        roles: true,
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
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateUser(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.updateUser({
        where: params,
        data: {
          ...data,

          residents: data.residents
            ? {
                connect: data.residents,
              }
            : undefined,

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

          mayor: data.mayor
            ? {
                connect: data.mayor,
              }
            : undefined,
        },
        select: {
          id: true,
          name: true,
          username: true,
          age: true,
          phone: true,
          createdAt: true,
          updatedAt: true,
          deletedAt: true,

          residents: {
            select: {
              id: true,
            },
          },

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

          mayor: {
            select: {
              id: true,
            },
          },

          roles: true,
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
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUser(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.deleteUser({
        where: params,
        select: {
          id: true,
          name: true,
          username: true,
          age: true,
          phone: true,
          createdAt: true,
          updatedAt: true,
          deletedAt: true,

          residents: {
            select: {
              id: true,
            },
          },

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

          mayor: {
            select: {
              id: true,
            },
          },

          roles: true,
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
  @common.Get("/:id/complaint")
  @ApiNestedQuery(ComplaintFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Complaint",
    action: "read",
    possession: "any",
  })
  async findComplaint(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Complaint[]> {
    const query = plainToClass(ComplaintFindManyArgs, request.query);
    const results = await this.service.findComplaint(params.id, {
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

  @common.Post("/:id/complaint")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectComplaint(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ComplaintWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      complaint: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/complaint")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateComplaint(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ComplaintWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      complaint: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/complaint")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectComplaint(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ComplaintWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      complaint: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/repair")
  @ApiNestedQuery(RepairFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Repair",
    action: "read",
    possession: "any",
  })
  async findRepair(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Repair[]> {
    const query = plainToClass(RepairFindManyArgs, request.query);
    const results = await this.service.findRepair(params.id, {
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

  @common.Post("/:id/repair")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectRepair(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: RepairWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      repair: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/repair")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateRepair(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: RepairWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      repair: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/repair")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectRepair(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: RepairWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      repair: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }
}
