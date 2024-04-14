import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MayorServiceBase } from "./base/mayor.service.base";

@Injectable()
export class MayorService extends MayorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
