import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './local.strategy';

@Module({
    imports : [PassportModule,UsersModule],
    providers: [LocalStrategy]
})
export class AuthModule {}
