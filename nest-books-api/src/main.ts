import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connect } from './models/db'

const port = process.env.PORT ||5000;

async function bootstrap() {
  await connect();
  const app = await NestFactory.create(AppModule);

  await app.listen(port);
  console.log(`Server is running on http://localhost:${port}`);
}
bootstrap();
