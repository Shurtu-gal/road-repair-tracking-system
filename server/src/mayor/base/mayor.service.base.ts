
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Mayor as PrismaMayor,
  Admin as PrismaAdmin,
  Report as PrismaReport,
  User as PrismaUser,
} from "@prisma/client";

export class MayorServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.MayorCountArgs, "select">): Promise<number> {
    return this.prisma.mayor.count(args);
  }

  async mayors<T extends Prisma.MayorFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MayorFindManyArgs>
  ): Promise<PrismaMayor[]> {
    return this.prisma.mayor.findMany<Prisma.MayorFindManyArgs>(args);
  }
  async mayor<T extends Prisma.MayorFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MayorFindUniqueArgs>
  ): Promise<PrismaMayor | null> {
    return this.prisma.mayor.findUnique(args);
  }
  async createMayor<T extends Prisma.MayorCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MayorCreateArgs>
  ): Promise<PrismaMayor> {
    return this.prisma.mayor.create<T>(args);
  }
  async updateMayor<T extends Prisma.MayorUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MayorUpdateArgs>
  ): Promise<PrismaMayor> {
    return this.prisma.mayor.update<T>(args);
  }
  async deleteMayor<T extends Prisma.MayorDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MayorDeleteArgs>
  ): Promise<PrismaMayor> {
    return this.prisma.mayor.delete(args);
  }

  async findAdmin(
    parentId: string,
    args: Prisma.AdminFindManyArgs
  ): Promise<PrismaAdmin[]> {
    return this.prisma.mayor
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .admin(args);
  }

  async findReports(
    parentId: string,
    args: Prisma.ReportFindManyArgs
  ): Promise<PrismaReport[]> {
    return this.prisma.mayor
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .reports(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.mayor
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
