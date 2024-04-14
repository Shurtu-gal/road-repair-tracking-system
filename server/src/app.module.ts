import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { ResidentModule } from "./resident/resident.module";
import { SupervisorModule } from "./supervisor/supervisor.module";
import { AdminModule } from "./admin/admin.module";
import { MayorModule } from "./mayor/mayor.module";
import { ComplaintModule } from "./complaint/complaint.module";
import { AreaModule } from "./area/area.module";
import { RepairModule } from "./repair/repair.module";
import { ResourceModule } from "./resource/resource.module";
import { RepairScheduleModule } from "./repairSchedule/repairSchedule.module";
import { ReportModule } from "./report/report.module";
import { UpdateModule } from "./update/update.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    ResidentModule,
    SupervisorModule,
    AdminModule,
    MayorModule,
    ComplaintModule,
    AreaModule,
    RepairModule,
    ResourceModule,
    RepairScheduleModule,
    ReportModule,
    UpdateModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
