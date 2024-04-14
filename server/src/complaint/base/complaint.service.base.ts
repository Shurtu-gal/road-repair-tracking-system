
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Complaint as PrismaComplaint,
  Area as PrismaArea,
  User as PrismaUser,
  Resident as PrismaResident,
  Repair as PrismaRepair,
  Report as PrismaReport,
  Update as PrismaUpdate,
} from "@prisma/client";

export class ComplaintServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ComplaintCountArgs, "select">
  ): Promise<number> {
    return this.prisma.complaint.count(args);
  }

  async complaints<T extends Prisma.ComplaintFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComplaintFindManyArgs>
  ): Promise<PrismaComplaint[]> {
    return this.prisma.complaint.findMany<Prisma.ComplaintFindManyArgs>(args);
  }
  async complaint<T extends Prisma.ComplaintFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComplaintFindUniqueArgs>
  ): Promise<PrismaComplaint | null> {
    return this.prisma.complaint.findUnique(args);
  }
  async createComplaint<T extends Prisma.ComplaintCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComplaintCreateArgs>
  ): Promise<PrismaComplaint> {
    return this.prisma.complaint.create<T>(args);
  }
  async updateComplaint<T extends Prisma.ComplaintUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComplaintUpdateArgs>
  ): Promise<PrismaComplaint> {
    return this.prisma.complaint.update<T>(args);
  }
  async deleteComplaint<T extends Prisma.ComplaintDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComplaintDeleteArgs>
  ): Promise<PrismaComplaint> {
    return this.prisma.complaint.delete(args);
  }

  async getArea(parentId: string): Promise<PrismaArea | null> {
    return this.prisma.complaint
      .findUnique({
        where: { id: parentId },
      })
      .area();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.complaint
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }

  async getResidents(parentId: string): Promise<PrismaResident | null> {
    return this.prisma.complaint
      .findUnique({
        where: { id: parentId },
      })
      .residents();
  }

  async getRepair(parentId: string): Promise<PrismaRepair | null> {
    return this.prisma.complaint
      .findUnique({
        where: { id: parentId },
      })
      .repair();
  }

  async getReport(parentId: string): Promise<PrismaReport | null> {
    return this.prisma.complaint
      .findUnique({
        where: { id: parentId },
      })
      .report();
  }

  async getUpdate(parentId: string): Promise<PrismaUpdate | null> {
    return this.prisma.complaint
      .findUnique({
        where: { id: parentId },
      })
      .update();
  }
}
