
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  RepairSchedule as PrismaRepairSchedule,
  Supervisor as PrismaSupervisor,
  Repair as PrismaRepair,
  Report as PrismaReport,
  Admin as PrismaAdmin,
} from "@prisma/client";

export class RepairScheduleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.RepairScheduleCountArgs, "select">
  ): Promise<number> {
    return this.prisma.repairSchedule.count(args);
  }

  async repairSchedules<T extends Prisma.RepairScheduleFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RepairScheduleFindManyArgs>
  ): Promise<PrismaRepairSchedule[]> {
    return this.prisma.repairSchedule.findMany<Prisma.RepairScheduleFindManyArgs>(
      args
    );
  }
  async repairSchedule<T extends Prisma.RepairScheduleFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RepairScheduleFindUniqueArgs>
  ): Promise<PrismaRepairSchedule | null> {
    return this.prisma.repairSchedule.findUnique(args);
  }
  async createRepairSchedule<T extends Prisma.RepairScheduleCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RepairScheduleCreateArgs>
  ): Promise<PrismaRepairSchedule> {
    return this.prisma.repairSchedule.create<T>(args);
  }
  async updateRepairSchedule<T extends Prisma.RepairScheduleUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RepairScheduleUpdateArgs>
  ): Promise<PrismaRepairSchedule> {
    return this.prisma.repairSchedule.update<T>(args);
  }
  async deleteRepairSchedule<T extends Prisma.RepairScheduleDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RepairScheduleDeleteArgs>
  ): Promise<PrismaRepairSchedule> {
    return this.prisma.repairSchedule.delete(args);
  }

  async findSupervisors(
    parentId: string,
    args: Prisma.SupervisorFindManyArgs
  ): Promise<PrismaSupervisor[]> {
    return this.prisma.repairSchedule
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .supervisors(args);
  }

  async findRepairs(
    parentId: string,
    args: Prisma.RepairFindManyArgs
  ): Promise<PrismaRepair[]> {
    return this.prisma.repairSchedule
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .repairs(args);
  }

  async findReport(
    parentId: string,
    args: Prisma.ReportFindManyArgs
  ): Promise<PrismaReport[]> {
    return this.prisma.repairSchedule
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .report(args);
  }

  async getAdmin(parentId: string): Promise<PrismaAdmin | null> {
    return this.prisma.repairSchedule
      .findUnique({
        where: { id: parentId },
      })
      .admin();
  }
}
