
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Admin as PrismaAdmin,
  Supervisor as PrismaSupervisor,
  Resource as PrismaResource,
  RepairSchedule as PrismaRepairSchedule,
  Mayor as PrismaMayor,
  User as PrismaUser,
} from "@prisma/client";

export class AdminServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AdminCountArgs, "select">): Promise<number> {
    return this.prisma.admin.count(args);
  }

  async admins<T extends Prisma.AdminFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdminFindManyArgs>
  ): Promise<PrismaAdmin[]> {
    return this.prisma.admin.findMany<Prisma.AdminFindManyArgs>(args);
  }
  async admin<T extends Prisma.AdminFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdminFindUniqueArgs>
  ): Promise<PrismaAdmin | null> {
    return this.prisma.admin.findUnique(args);
  }
  async createAdmin<T extends Prisma.AdminCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdminCreateArgs>
  ): Promise<PrismaAdmin> {
    return this.prisma.admin.create<T>(args);
  }
  async updateAdmin<T extends Prisma.AdminUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdminUpdateArgs>
  ): Promise<PrismaAdmin> {
    return this.prisma.admin.update<T>(args);
  }
  async deleteAdmin<T extends Prisma.AdminDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdminDeleteArgs>
  ): Promise<PrismaAdmin> {
    return this.prisma.admin.delete(args);
  }

  async findSupervisors(
    parentId: string,
    args: Prisma.SupervisorFindManyArgs
  ): Promise<PrismaSupervisor[]> {
    return this.prisma.admin
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .supervisors(args);
  }

  async findResources(
    parentId: string,
    args: Prisma.ResourceFindManyArgs
  ): Promise<PrismaResource[]> {
    return this.prisma.admin
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .resources(args);
  }

  async findRepairSchedules(
    parentId: string,
    args: Prisma.RepairScheduleFindManyArgs
  ): Promise<PrismaRepairSchedule[]> {
    return this.prisma.admin
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .repairSchedules(args);
  }

  async getMayor(parentId: string): Promise<PrismaMayor | null> {
    return this.prisma.admin
      .findUnique({
        where: { id: parentId },
      })
      .mayor();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.admin
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
