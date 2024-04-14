import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReportServiceBase } from "./base/report.service.base";

@Injectable()
export class ReportService extends ReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
