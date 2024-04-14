
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Repair as PrismaRepair,
  Complaint as PrismaComplaint,
  Resource as PrismaResource,
  User as PrismaUser,
  Area as PrismaArea,
  Supervisor as PrismaSupervisor,
  RepairSchedule as PrismaRepairSchedule,
} from "@prisma/client";

export class RepairServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.RepairCountArgs, "select">): Promise<number> {
    return this.prisma.repair.count(args);
  }

  async repairs<T extends Prisma.RepairFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RepairFindManyArgs>
  ): Promise<PrismaRepair[]> {
    return this.prisma.repair.findMany<Prisma.RepairFindManyArgs>(args);
  }
  async repair<T extends Prisma.RepairFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RepairFindUniqueArgs>
  ): Promise<PrismaRepair | null> {
    return this.prisma.repair.findUnique(args);
  }
  async createRepair<T extends Prisma.RepairCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RepairCreateArgs>
  ): Promise<PrismaRepair> {
    return this.prisma.repair.create<T>(args);
  }
  async updateRepair<T extends Prisma.RepairUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RepairUpdateArgs>
  ): Promise<PrismaRepair> {
    return this.prisma.repair.update<T>(args);
  }
  async deleteRepair<T extends Prisma.RepairDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RepairDeleteArgs>
  ): Promise<PrismaRepair> {
    return this.prisma.repair.delete(args);
  }

  async findComplaints(
    parentId: string,
    args: Prisma.ComplaintFindManyArgs
  ): Promise<PrismaComplaint[]> {
    return this.prisma.repair
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .complaints(args);
  }

  async findResources(
    parentId: string,
    args: Prisma.ResourceFindManyArgs
  ): Promise<PrismaResource[]> {
    return this.prisma.repair
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .resources(args);
  }

  async getAssignedTo(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.repair
      .findUnique({
        where: { id: parentId },
      })
      .assignedTo();
  }

  async getArea(parentId: string): Promise<PrismaArea | null> {
    return this.prisma.repair
      .findUnique({
        where: { id: parentId },
      })
      .area();
  }

  async getSupervisors(parentId: string): Promise<PrismaSupervisor | null> {
    return this.prisma.repair
      .findUnique({
        where: { id: parentId },
      })
      .supervisors();
  }

  async getRepairSchedule(
    parentId: string
  ): Promise<PrismaRepairSchedule | null> {
    return this.prisma.repair
      .findUnique({
        where: { id: parentId },
      })
      .repairSchedule();
  }
}
