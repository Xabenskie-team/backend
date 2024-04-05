import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { TaskModule } from './task/task.module';

@Module({
	imports: [AuthModule, UserModule, ConfigModule.forRoot(), TaskModule]
})
export class AppModule {}
