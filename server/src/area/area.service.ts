import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AreaServiceBase } from "./base/area.service.base";

@Injectable()
export class AreaService extends AreaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
