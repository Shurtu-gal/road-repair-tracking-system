
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Report as PrismaReport,
  Complaint as PrismaComplaint,
  Resource as PrismaResource,
  Update as PrismaUpdate,
  RepairSchedule as PrismaRepairSchedule,
  Mayor as PrismaMayor,
} from "@prisma/client";

export class ReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ReportCountArgs, "select">): Promise<number> {
    return this.prisma.report.count(args);
  }

  async reports<T extends Prisma.ReportFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReportFindManyArgs>
  ): Promise<PrismaReport[]> {
    return this.prisma.report.findMany<Prisma.ReportFindManyArgs>(args);
  }
  async report<T extends Prisma.ReportFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReportFindUniqueArgs>
  ): Promise<PrismaReport | null> {
    return this.prisma.report.findUnique(args);
  }
  async createReport<T extends Prisma.ReportCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReportCreateArgs>
  ): Promise<PrismaReport> {
    return this.prisma.report.create<T>(args);
  }
  async updateReport<T extends Prisma.ReportUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReportUpdateArgs>
  ): Promise<PrismaReport> {
    return this.prisma.report.update<T>(args);
  }
  async deleteReport<T extends Prisma.ReportDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReportDeleteArgs>
  ): Promise<PrismaReport> {
    return this.prisma.report.delete(args);
  }

  async findComplaints(
    parentId: string,
    args: Prisma.ComplaintFindManyArgs
  ): Promise<PrismaComplaint[]> {
    return this.prisma.report
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .complaints(args);
  }

  async findResources(
    parentId: string,
    args: Prisma.ResourceFindManyArgs
  ): Promise<PrismaResource[]> {
    return this.prisma.report
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .resources(args);
  }

  async findUpdate(
    parentId: string,
    args: Prisma.UpdateFindManyArgs
  ): Promise<PrismaUpdate[]> {
    return this.prisma.report
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .update(args);
  }

  async getRepairSchedule(
    parentId: string
  ): Promise<PrismaRepairSchedule | null> {
    return this.prisma.report
      .findUnique({
        where: { id: parentId },
      })
      .repairSchedule();
  }

  async getMayor(parentId: string): Promise<PrismaMayor | null> {
    return this.prisma.report
      .findUnique({
        where: { id: parentId },
      })
      .mayor();
  }
}
