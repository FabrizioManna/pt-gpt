import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe, VersioningType, VERSION_NEUTRAL } from '@nestjs/common';
async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Rest API PT-GPT")
    .setDescription('Rest API for use chat-gpt for personal trainer of specific parameters')
    .setVersion('v' + process.env.API_VERSION)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: [VERSION_NEUTRAL, 'v1', 'v2']
  });

  await app.listen(3000);
}
bootstrap();
