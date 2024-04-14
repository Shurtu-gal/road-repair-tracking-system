import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RepairScheduleServiceBase } from "./base/repairSchedule.service.base";

@Injectable()
export class RepairScheduleService extends RepairScheduleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
