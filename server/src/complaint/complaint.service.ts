import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ComplaintServiceBase } from "./base/complaint.service.base";

@Injectable()
export class ComplaintService extends ComplaintServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
