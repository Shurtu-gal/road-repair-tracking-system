
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Supervisor as PrismaSupervisor,
  Repair as PrismaRepair,
  Resource as PrismaResource,
  Area as PrismaArea,
  RepairSchedule as PrismaRepairSchedule,
  User as PrismaUser,
  Admin as PrismaAdmin,
} from "@prisma/client";

export class SupervisorServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SupervisorCountArgs, "select">
  ): Promise<number> {
    return this.prisma.supervisor.count(args);
  }

  async supervisors<T extends Prisma.SupervisorFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SupervisorFindManyArgs>
  ): Promise<PrismaSupervisor[]> {
    return this.prisma.supervisor.findMany<Prisma.SupervisorFindManyArgs>(args);
  }
  async supervisor<T extends Prisma.SupervisorFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SupervisorFindUniqueArgs>
  ): Promise<PrismaSupervisor | null> {
    return this.prisma.supervisor.findUnique(args);
  }
  async createSupervisor<T extends Prisma.SupervisorCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SupervisorCreateArgs>
  ): Promise<PrismaSupervisor> {
    return this.prisma.supervisor.create<T>(args);
  }
  async updateSupervisor<T extends Prisma.SupervisorUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SupervisorUpdateArgs>
  ): Promise<PrismaSupervisor> {
    return this.prisma.supervisor.update<T>(args);
  }
  async deleteSupervisor<T extends Prisma.SupervisorDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SupervisorDeleteArgs>
  ): Promise<PrismaSupervisor> {
    return this.prisma.supervisor.delete(args);
  }

  async findRepairs(
    parentId: string,
    args: Prisma.RepairFindManyArgs
  ): Promise<PrismaRepair[]> {
    return this.prisma.supervisor
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .repairs(args);
  }

  async findResources(
    parentId: string,
    args: Prisma.ResourceFindManyArgs
  ): Promise<PrismaResource[]> {
    return this.prisma.supervisor
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .resources(args);
  }

  async getArea(parentId: string): Promise<PrismaArea | null> {
    return this.prisma.supervisor
      .findUnique({
        where: { id: parentId },
      })
      .area();
  }

  async getRepairSchedule(
    parentId: string
  ): Promise<PrismaRepairSchedule | null> {
    return this.prisma.supervisor
      .findUnique({
        where: { id: parentId },
      })
      .repairSchedule();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.supervisor
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }

  async getAdmin(parentId: string): Promise<PrismaAdmin | null> {
    return this.prisma.supervisor
      .findUnique({
        where: { id: parentId },
      })
      .admin();
  }
}
