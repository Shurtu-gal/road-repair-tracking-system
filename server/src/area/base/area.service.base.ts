
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Area as PrismaArea,
  Resident as PrismaResident,
  Supervisor as PrismaSupervisor,
  Complaint as PrismaComplaint,
  Repair as PrismaRepair,
} from "@prisma/client";

export class AreaServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AreaCountArgs, "select">): Promise<number> {
    return this.prisma.area.count(args);
  }

  async areas<T extends Prisma.AreaFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AreaFindManyArgs>
  ): Promise<PrismaArea[]> {
    return this.prisma.area.findMany<Prisma.AreaFindManyArgs>(args);
  }
  async area<T extends Prisma.AreaFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AreaFindUniqueArgs>
  ): Promise<PrismaArea | null> {
    return this.prisma.area.findUnique(args);
  }
  async createArea<T extends Prisma.AreaCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AreaCreateArgs>
  ): Promise<PrismaArea> {
    return this.prisma.area.create<T>(args);
  }
  async updateArea<T extends Prisma.AreaUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AreaUpdateArgs>
  ): Promise<PrismaArea> {
    return this.prisma.area.update<T>(args);
  }
  async deleteArea<T extends Prisma.AreaDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AreaDeleteArgs>
  ): Promise<PrismaArea> {
    return this.prisma.area.delete(args);
  }

  async findResidents(
    parentId: string,
    args: Prisma.ResidentFindManyArgs
  ): Promise<PrismaResident[]> {
    return this.prisma.area
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .residents(args);
  }

  async findSupervisors(
    parentId: string,
    args: Prisma.SupervisorFindManyArgs
  ): Promise<PrismaSupervisor[]> {
    return this.prisma.area
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .supervisors(args);
  }

  async findComplaint(
    parentId: string,
    args: Prisma.ComplaintFindManyArgs
  ): Promise<PrismaComplaint[]> {
    return this.prisma.area
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .complaint(args);
  }

  async findRepair(
    parentId: string,
    args: Prisma.RepairFindManyArgs
  ): Promise<PrismaRepair[]> {
    return this.prisma.area
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .repair(args);
  }
}
