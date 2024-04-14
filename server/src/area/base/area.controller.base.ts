
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { AreaService } from "../area.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AreaCreateInput } from "./AreaCreateInput";
import { Area } from "./Area";
import { AreaFindManyArgs } from "./AreaFindManyArgs";
import { AreaWhereUniqueInput } from "./AreaWhereUniqueInput";
import { AreaUpdateInput } from "./AreaUpdateInput";
import { ResidentFindManyArgs } from "../../resident/base/ResidentFindManyArgs";
import { Resident } from "../../resident/base/Resident";
import { ResidentWhereUniqueInput } from "../../resident/base/ResidentWhereUniqueInput";
import { SupervisorFindManyArgs } from "../../supervisor/base/SupervisorFindManyArgs";
import { Supervisor } from "../../supervisor/base/Supervisor";
import { SupervisorWhereUniqueInput } from "../../supervisor/base/SupervisorWhereUniqueInput";
import { ComplaintFindManyArgs } from "../../complaint/base/ComplaintFindManyArgs";
import { Complaint } from "../../complaint/base/Complaint";
import { ComplaintWhereUniqueInput } from "../../complaint/base/ComplaintWhereUniqueInput";
import { RepairFindManyArgs } from "../../repair/base/RepairFindManyArgs";
import { Repair } from "../../repair/base/Repair";
import { RepairWhereUniqueInput } from "../../repair/base/RepairWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AreaControllerBase {
  constructor(
    protected readonly service: AreaService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Area })
  @nestAccessControl.UseRoles({
    resource: "Area",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createArea(@common.Body() data: AreaCreateInput): Promise<Area> {
    return await this.service.createArea({
      data: data,
      select: {
        id: true,
        name: true,
        address: true,
        region: true,
        country: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Area] })
  @ApiNestedQuery(AreaFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Area",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async areas(@common.Req() request: Request): Promise<Area[]> {
    const args = plainToClass(AreaFindManyArgs, request.query);
    return this.service.areas({
      ...args,
      select: {
        id: true,
        name: true,
        address: true,
        region: true,
        country: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Area })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Area",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async area(
    @common.Param() params: AreaWhereUniqueInput
  ): Promise<Area | null> {
    const result = await this.service.area({
      where: params,
      select: {
        id: true,
        name: true,
        address: true,
        region: true,
        country: true,
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
  @swagger.ApiOkResponse({ type: Area })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Area",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateArea(
    @common.Param() params: AreaWhereUniqueInput,
    @common.Body() data: AreaUpdateInput
  ): Promise<Area | null> {
    try {
      return await this.service.updateArea({
        where: params,
        data: data,
        select: {
          id: true,
          name: true,
          address: true,
          region: true,
          country: true,
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
  @swagger.ApiOkResponse({ type: Area })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Area",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteArea(
    @common.Param() params: AreaWhereUniqueInput
  ): Promise<Area | null> {
    try {
      return await this.service.deleteArea({
        where: params,
        select: {
          id: true,
          name: true,
          address: true,
          region: true,
          country: true,
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
  @common.Get("/:id/residents")
  @ApiNestedQuery(ResidentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Resident",
    action: "read",
    possession: "any",
  })
  async findResidents(
    @common.Req() request: Request,
    @common.Param() params: AreaWhereUniqueInput
  ): Promise<Resident[]> {
    const query = plainToClass(ResidentFindManyArgs, request.query);
    const results = await this.service.findResidents(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/residents")
  @nestAccessControl.UseRoles({
    resource: "Area",
    action: "update",
    possession: "any",
  })
  async connectResidents(
    @common.Param() params: AreaWhereUniqueInput,
    @common.Body() body: ResidentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      residents: {
        connect: body,
      },
    };
    await this.service.updateArea({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/residents")
  @nestAccessControl.UseRoles({
    resource: "Area",
    action: "update",
    possession: "any",
  })
  async updateResidents(
    @common.Param() params: AreaWhereUniqueInput,
    @common.Body() body: ResidentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      residents: {
        set: body,
      },
    };
    await this.service.updateArea({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/residents")
  @nestAccessControl.UseRoles({
    resource: "Area",
    action: "update",
    possession: "any",
  })
  async disconnectResidents(
    @common.Param() params: AreaWhereUniqueInput,
    @common.Body() body: ResidentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      residents: {
        disconnect: body,
      },
    };
    await this.service.updateArea({
      where: params,
      data,
      select: { id: true },
    });
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
    @common.Param() params: AreaWhereUniqueInput
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
    resource: "Area",
    action: "update",
    possession: "any",
  })
  async connectSupervisors(
    @common.Param() params: AreaWhereUniqueInput,
    @common.Body() body: SupervisorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      supervisors: {
        connect: body,
      },
    };
    await this.service.updateArea({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/supervisors")
  @nestAccessControl.UseRoles({
    resource: "Area",
    action: "update",
    possession: "any",
  })
  async updateSupervisors(
    @common.Param() params: AreaWhereUniqueInput,
    @common.Body() body: SupervisorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      supervisors: {
        set: body,
      },
    };
    await this.service.updateArea({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/supervisors")
  @nestAccessControl.UseRoles({
    resource: "Area",
    action: "update",
    possession: "any",
  })
  async disconnectSupervisors(
    @common.Param() params: AreaWhereUniqueInput,
    @common.Body() body: SupervisorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      supervisors: {
        disconnect: body,
      },
    };
    await this.service.updateArea({
      where: params,
      data,
      select: { id: true },
    });
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
    @common.Param() params: AreaWhereUniqueInput
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
    resource: "Area",
    action: "update",
    possession: "any",
  })
  async connectComplaint(
    @common.Param() params: AreaWhereUniqueInput,
    @common.Body() body: ComplaintWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      complaint: {
        connect: body,
      },
    };
    await this.service.updateArea({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/complaint")
  @nestAccessControl.UseRoles({
    resource: "Area",
    action: "update",
    possession: "any",
  })
  async updateComplaint(
    @common.Param() params: AreaWhereUniqueInput,
    @common.Body() body: ComplaintWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      complaint: {
        set: body,
      },
    };
    await this.service.updateArea({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/complaint")
  @nestAccessControl.UseRoles({
    resource: "Area",
    action: "update",
    possession: "any",
  })
  async disconnectComplaint(
    @common.Param() params: AreaWhereUniqueInput,
    @common.Body() body: ComplaintWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      complaint: {
        disconnect: body,
      },
    };
    await this.service.updateArea({
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
    @common.Param() params: AreaWhereUniqueInput
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
    resource: "Area",
    action: "update",
    possession: "any",
  })
  async connectRepair(
    @common.Param() params: AreaWhereUniqueInput,
    @common.Body() body: RepairWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      repair: {
        connect: body,
      },
    };
    await this.service.updateArea({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/repair")
  @nestAccessControl.UseRoles({
    resource: "Area",
    action: "update",
    possession: "any",
  })
  async updateRepair(
    @common.Param() params: AreaWhereUniqueInput,
    @common.Body() body: RepairWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      repair: {
        set: body,
      },
    };
    await this.service.updateArea({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/repair")
  @nestAccessControl.UseRoles({
    resource: "Area",
    action: "update",
    possession: "any",
  })
  async disconnectRepair(
    @common.Param() params: AreaWhereUniqueInput,
    @common.Body() body: RepairWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      repair: {
        disconnect: body,
      },
    };
    await this.service.updateArea({
      where: params,
      data,
      select: { id: true },
    });
  }
}
