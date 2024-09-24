import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { sync } from './models/db.connection';
import * as dotenv from 'dotenv';

dotenv.config();
 

const port = process.env.PORT ||5000;

async function bootstrap() {
  await sync();
  const app = await NestFactory.create(AppModule);

  app.enableCors(); //out of box.

  

  // app.enableCors({
  //   origin: 'http://example.com', // Replace with your allowed origin or array of origins
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify allowed HTTP methods
  //   allowedHeaders: 'Content-Type, Accept', // Specify allowed headers
  //   credentials: true, // Enable sending credentials (cookies, HTTP authentication)
  // });



  await app.listen(port);
  console.log(`Server is running on http://localhost:${port}`);
}
bootstrap();
