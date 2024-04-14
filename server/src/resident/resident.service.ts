import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ResidentServiceBase } from "./base/resident.service.base";

@Injectable()
export class ResidentService extends ResidentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
