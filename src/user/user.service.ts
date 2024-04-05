import { Injectable } from '@nestjs/common'
import { hash } from 'argon2'
import { AuthDto } from 'src/auth/dto/auth.dto'
import { PrismaService } from 'src/prisma.service'
import { UserDto } from './dto/user.dto'
import { startOfDay, subDays } from 'date-fns'

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	async create(dto: AuthDto) {
		const user = {
			email: dto.email,
			name: '',
			password: await hash(dto.password)
		}

		return this.prisma.user.create({
			data: user
		})
	}

	async update(id: string, dto: UserDto) {
		let data = dto

		if (dto.password) {
			data = {...dto, password: await hash(dto.password)}
		}

		return this.prisma.user.update({
			where: {
				id,
			},
			data,
			select: {
				name: true,
				email: true
			}
		})
	}

	getById(id: string) {
		return this.prisma.user.findUnique({
			where: {
				id: id
			},
			include: {
				tasks: true
			}
		})
	}

	getByEmail(email: string) {
		return this.prisma.user.findUnique({
			where: {
				email: email
			}
		})
	}

	async getProfile(id: string) {
		const profile = await this.getById(id)

		const totalTasks = profile.tasks.length
		const completedTasks = await this.prisma.task.count ({
			where: {
				userId: id,
				isCompleted: true,
			}
		})

		const {password, ...rest} = profile

		return {
			user: rest,
			statistics: [
				{Label: 'Total', value: totalTasks},
				{Label: 'Completed tasks', value: completedTasks},
			]
		}

	}

	
}
