import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RepairServiceBase } from "./base/repair.service.base";

@Injectable()
export class RepairService extends RepairServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
