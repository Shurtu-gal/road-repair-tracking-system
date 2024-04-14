import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UpdateServiceBase } from "./base/update.service.base";

@Injectable()
export class UpdateService extends UpdateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
