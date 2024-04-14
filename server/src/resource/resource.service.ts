import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ResourceServiceBase } from "./base/resource.service.base";

@Injectable()
export class ResourceService extends ResourceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
