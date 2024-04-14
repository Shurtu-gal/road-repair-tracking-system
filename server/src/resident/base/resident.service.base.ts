
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Resident as PrismaResident,
  Complaint as PrismaComplaint,
  Update as PrismaUpdate,
  Area as PrismaArea,
  User as PrismaUser,
} from "@prisma/client";

export class ResidentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ResidentCountArgs, "select">): Promise<number> {
    return this.prisma.resident.count(args);
  }

  async residents<T extends Prisma.ResidentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ResidentFindManyArgs>
  ): Promise<PrismaResident[]> {
    return this.prisma.resident.findMany<Prisma.ResidentFindManyArgs>(args);
  }
  async resident<T extends Prisma.ResidentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ResidentFindUniqueArgs>
  ): Promise<PrismaResident | null> {
    return this.prisma.resident.findUnique(args);
  }
  async createResident<T extends Prisma.ResidentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ResidentCreateArgs>
  ): Promise<PrismaResident> {
    return this.prisma.resident.create<T>(args);
  }
  async updateResident<T extends Prisma.ResidentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ResidentUpdateArgs>
  ): Promise<PrismaResident> {
    return this.prisma.resident.update<T>(args);
  }
  async deleteResident<T extends Prisma.ResidentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ResidentDeleteArgs>
  ): Promise<PrismaResident> {
    return this.prisma.resident.delete(args);
  }

  async findComplaints(
    parentId: string,
    args: Prisma.ComplaintFindManyArgs
  ): Promise<PrismaComplaint[]> {
    return this.prisma.resident
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .complaints(args);
  }

  async findUpdates(
    parentId: string,
    args: Prisma.UpdateFindManyArgs
  ): Promise<PrismaUpdate[]> {
    return this.prisma.resident
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .updates(args);
  }

  async getArea(parentId: string): Promise<PrismaArea | null> {
    return this.prisma.resident
      .findUnique({
        where: { id: parentId },
      })
      .area();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.resident
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
