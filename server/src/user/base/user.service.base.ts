
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  User as PrismaUser,
  Complaint as PrismaComplaint,
  Repair as PrismaRepair,
  Resident as PrismaResident,
  Supervisor as PrismaSupervisor,
  Admin as PrismaAdmin,
  Mayor as PrismaMayor,
} from "@prisma/client";

import { PasswordService } from "../../auth/password.service";
import { transformStringFieldUpdateInput } from "../../prisma.util";

export class UserServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService
  ) {}

  async count(args: Omit<Prisma.UserCountArgs, "select">): Promise<number> {
    return this.prisma.user.count(args);
  }

  async users<T extends Prisma.UserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>
  ): Promise<PrismaUser[]> {
    return this.prisma.user.findMany<Prisma.UserFindManyArgs>(args);
  }
  async user<T extends Prisma.UserFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindUniqueArgs>
  ): Promise<PrismaUser | null> {
    return this.prisma.user.findUnique(args);
  }
  async createUser<T extends Prisma.UserCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserCreateArgs>
  ): Promise<PrismaUser> {
    return this.prisma.user.create<T>({
      ...args,

      data: {
        ...args.data,
        password: await this.passwordService.hash(args.data.password),
      },
    });
  }
  async updateUser<T extends Prisma.UserUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserUpdateArgs>
  ): Promise<PrismaUser> {
    return this.prisma.user.update<T>({
      ...args,

      data: {
        ...args.data,

        password:
          args.data.password &&
          (await transformStringFieldUpdateInput(
            args.data.password,
            (password) => this.passwordService.hash(password)
          )),
      },
    });
  }
  async deleteUser<T extends Prisma.UserDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserDeleteArgs>
  ): Promise<PrismaUser> {
    return this.prisma.user.delete(args);
  }

  async findComplaint(
    parentId: string,
    args: Prisma.ComplaintFindManyArgs
  ): Promise<PrismaComplaint[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .complaint(args);
  }

  async findRepair(
    parentId: string,
    args: Prisma.RepairFindManyArgs
  ): Promise<PrismaRepair[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .repair(args);
  }

  async getResidents(parentId: string): Promise<PrismaResident | null> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .residents();
  }

  async getSupervisors(parentId: string): Promise<PrismaSupervisor | null> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .supervisors();
  }

  async getAdmin(parentId: string): Promise<PrismaAdmin | null> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .admin();
  }

  async getMayor(parentId: string): Promise<PrismaMayor | null> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .mayor();
  }
}
