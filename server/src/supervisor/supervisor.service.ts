import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SupervisorServiceBase } from "./base/supervisor.service.base";

@Injectable()
export class SupervisorService extends SupervisorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
