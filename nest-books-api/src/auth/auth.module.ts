import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './jwt-auth.guard';

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
          secret: process.env.JWT_SECRET,
          signOptions: { expiresIn: '60m' }, // Adjust expiration as needed
        }),
      ],
      providers: [JwtStrategy, JwtAuthGuard],
      exports: [JwtAuthGuard],
})
export class AuthModule {}
