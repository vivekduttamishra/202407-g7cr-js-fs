import { Module } from '@nestjs/common';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [AuthorsModule]
})
export class AppModule {}
