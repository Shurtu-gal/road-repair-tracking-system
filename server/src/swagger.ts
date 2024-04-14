import { DocumentBuilder, SwaggerCustomOptions } from "@nestjs/swagger";

export const swaggerPath = "api";

export const swaggerDocumentOptions = new DocumentBuilder()
  .setTitle("Road Repair and Tracking System")
  .setDescription(
    'Welcome to the road repair and tracking system API. This API is used to manage the road repair and tracking system. You can find out more about the API at [GitHub](https://github.com/Shurtu-gal/road-repair-and-tracking-system).'
  )
  .addBearerAuth()
  .build();

export const swaggerSetupOptions: SwaggerCustomOptions = {
  swaggerOptions: {
    persistAuthorization: true,
  },
  customCssUrl: "../swagger/swagger.css",
  customfavIcon: "../swagger/favicon.png",
  customSiteTitle: "Road Repair and Tracking System API",
};
