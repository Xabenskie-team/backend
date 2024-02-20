import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PrismaService } from 'src/prisma.service'
import { UsersService } from 'src/users/users.service'
import { UsersModule } from '../users/users.module'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { jwtConstants } from './constants'

@Module({
	imports: [
		UsersModule,
		JwtModule.register({
			global: true,
			secret: jwtConstants.secret,
			signOptions: { expiresIn: '7d' }
		})
	],
	providers: [AuthService, UsersService, PrismaService],
	controllers: [AuthController],
	exports: [AuthService]
})
export class AuthModule {}
